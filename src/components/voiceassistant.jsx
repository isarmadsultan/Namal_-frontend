import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, X, Volume2, VolumeX, MessageSquare, Phone } from 'lucide-react';

const API_KEY = 'vrag_1bed96b01430d58cfc4245ea1b0c2292eeee4aad0cb9cb25';
const API_URL = 'http://localhost:8000';

const VoiceAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('voice'); // 'voice' or 'chat'
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'assistant', text: 'Hello! I\'m Namal University\'s AI assistant. How can I help you today?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [transcript, setTranscript] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);
    const audioRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const stopSpeaking = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsSpeaking(false);
        }
    };

    // Play base64 audio returned by the backend TTS
    const playAudio = (base64Audio) => {
        if (!base64Audio) return;
        stopSpeaking();
        const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
        audioRef.current = audio;
        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => setIsSpeaking(false);
        audio.play().catch(console.error);
    };

    // ── Text chat via streaming SSE ───────────────────────────────────
    const sendChatMessage = async (text) => {
        setIsLoading(true);
        // Add a placeholder assistant message we'll fill token-by-token
        setMessages(prev => [...prev, { type: 'assistant', text: '' }]);

        try {
            const res = await fetch(`${API_URL}/widget/chat/stream`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': API_KEY,
                },
                body: JSON.stringify({ message: text, session_id: sessionId }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.detail || 'Request failed');
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';
            let fullAnswer = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed.startsWith('data: ')) continue;
                    const json = trimmed.slice(6);
                    if (json === '[DONE]') continue;
                    try {
                        const chunk = JSON.parse(json);
                        if (chunk.type === 'token') {
                            fullAnswer += chunk.content;
                            setMessages(prev => {
                                const updated = [...prev];
                                updated[updated.length - 1] = { type: 'assistant', text: fullAnswer };
                                return updated;
                            });
                        }
                        if (chunk.type === 'done' && chunk.conversation_id) {
                            setSessionId(chunk.conversation_id);
                        }
                    } catch {}
                }
            }
        } catch (err) {
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { type: 'assistant', text: `Error: ${err.message}` };
                return updated;
            });
        } finally {
            setIsLoading(false);
        }
    };

    // ── Voice: record → send to backend STT+RAG+TTS ──────────────────
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            audioChunksRef.current = [];
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;

            recorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            recorder.onstop = async () => {
                stream.getTracks().forEach(t => t.stop());
                const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                await sendVoiceMessage(blob);
            };

            recorder.start();
            setIsListening(true);
        } catch (err) {
            console.error('Mic error:', err);
            alert('Microphone access denied. Please allow microphone and try again.');
        }
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsListening(false);
        setTranscript('');
    };

    const toggleListening = () => {
        if (isListening) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const sendVoiceMessage = async (audioBlob) => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', audioBlob, 'recording.webm');
            if (sessionId) formData.append('session_id', sessionId);

            const res = await fetch(`${API_URL}/widget/voice`, {
                method: 'POST',
                headers: { 'X-API-Key': API_KEY },
                body: formData,
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                throw new Error(err.detail || 'Voice request failed');
            }

            const data = await res.json();
            if (data.session_id) setSessionId(data.session_id);

            if (data.transcription) {
                setMessages(prev => [...prev, { type: 'user', text: data.transcription }]);
            }
            if (data.answer) {
                setMessages(prev => [...prev, { type: 'assistant', text: data.answer }]);
            }
            if (data.audio_base64) {
                playAudio(data.audio_base64);
            }
        } catch (err) {
            setMessages(prev => [...prev, { type: 'assistant', text: `Error: ${err.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    // ── Chat submit ───────────────────────────────────────────────────
    const handleChatMessage = (e) => {
        if (e) e.preventDefault();
        if (!inputText.trim() || isLoading) return;
        const text = inputText.trim();
        setMessages(prev => [...prev, { type: 'user', text }]);
        setInputText('');
        sendChatMessage(text);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleChatMessage();
        }
    };

    return (
        <>
            {/* Floating Button */}
            <div className="fixed bottom-8 right-8 z-50">
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-white rounded-full p-6 shadow-2xl hover:scale-110 transition-all duration-300 relative group"
                    >
                        <div className="relative">
                            <Mic className="w-10 h-10 text-teal-500" strokeWidth={2.5} />
                            {/* Animated pulse rings */}
                            <span className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-75 animate-ping"></span>
                            <span className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-50"></span>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Ask me anything!
                        </div>
                    </button>
                )}
            </div>

            {/* Assistant Card */}
            {isOpen && (
                <div className="fixed bottom-8 right-8 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#ffb32c] to-[#ffa000] text-white p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Mic className="w-5 h-5" />
                                </div>
                                {(isListening || isSpeaking) && (
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Namal Assistant</h3>
                                <p className="text-xs text-white/80">
                                    {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Online'}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                stopSpeaking();
                                if (isListening) stopRecording();
                            }}
                            className="hover:bg-white/20 p-2 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mode Toggle */}
                    <div className="flex bg-gray-100 p-2 gap-2">
                        <button
                            onClick={() => {
                                setMode('voice');
                                stopSpeaking();
                            }}
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${mode === 'voice'
                                ? 'bg-white text-[#ffb32c] shadow-md'
                                : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            <Phone className="w-4 h-4" />
                            Voice
                        </button>
                        <button
                            onClick={() => {
                                setMode('chat');
                                if (isListening) stopRecording();
                                stopSpeaking();
                            }}
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${mode === 'chat'
                                ? 'bg-white text-[#ffb32c] shadow-md'
                                : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            Chat
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl ${message.type === 'user'
                                        ? 'bg-[#ffb32c] text-white rounded-br-none'
                                        : 'bg-white text-gray-800 rounded-bl-none shadow-md'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            </div>
                        ))}
                        {transcript && isListening && (
                            <div className="flex justify-end">
                                <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-600 rounded-br-none italic">
                                    <p className="text-sm">{transcript}</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    {mode === 'chat' ? (
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#ffb32c] focus:ring-2 focus:ring-[#ffb32c]/20"
                                />
                                <button
                                    onClick={handleChatMessage}
                                    className="bg-[#ffb32c] text-white p-3 rounded-full hover:bg-[#ffa000] transition-colors shadow-md"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 bg-white border-t border-gray-200">
                            <div className="flex items-center justify-center gap-4">
                                <button
                                    onClick={toggleListening}
                                    className={`p-6 rounded-full transition-all shadow-lg ${isListening
                                        ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                                        : 'bg-[#ffb32c] hover:bg-[#ffa000]'
                                        }`}
                                >
                                    {isListening ? (
                                        <MicOff className="w-8 h-8 text-white" />
                                    ) : (
                                        <Mic className="w-8 h-8 text-white" />
                                    )}
                                </button>
                                <button
                                    onClick={stopSpeaking}
                                    disabled={!isSpeaking}
                                    className={`p-4 rounded-full transition-all ${isSpeaking
                                        ? 'bg-gray-700 hover:bg-gray-800'
                                        : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    {isSpeaking ? (
                                        <VolumeX className="w-6 h-6 text-white" />
                                    ) : (
                                        <Volume2 className="w-6 h-6 text-gray-500" />
                                    )}
                                </button>
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-3">
                                {isListening ? 'Listening... Click to stop' : 'Click microphone to speak'}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default VoiceAssistant;