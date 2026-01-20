import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, X, Volume2, VolumeX, MessageSquare, Phone } from 'lucide-react';
import axios from 'axios';

const VoiceAssistantWithBackend = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('voice'); // 'voice' or 'chat'
    const [isListening, setIsListening] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'assistant', text: 'Hello! I\'m Namal University\'s AI assistant. How can I help you today?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [transcript, setTranscript] = useState('');
    const messagesEndRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const audioElementRef = useRef(null);

    const BACKEND_URL = `http://${window.location.hostname}:8000`;

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Check browser compatibility on mount
    useEffect(() => {
        // Check if MediaRecorder is supported
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error('getUserMedia is not supported in this browser');
            setMessages(prev => [...prev, {
                type: 'assistant',
                text: 'Sorry, your browser does not support audio recording. Please use Chrome, Edge, or Firefox.'
            }]);
        }

        if (!window.MediaRecorder) {
            console.error('MediaRecorder is not supported in this browser');
            setMessages(prev => [...prev, {
                type: 'assistant',
                text: 'Sorry, your browser does not support audio recording. Please use a modern browser like Chrome or Firefox.'
            }]);
        }

        // Log supported MIME types for debugging
        const supportedTypes = [
            'audio/webm',
            'audio/webm;codecs=opus',
            'audio/ogg;codecs=opus',
            'audio/mp4'
        ];

        console.log('Supported audio formats:');
        supportedTypes.forEach(type => {
            if (MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(type)) {
                console.log(`✅ ${type}`);
            } else {
                console.log(`❌ ${type}`);
            }
        });
    }, []);

    const startRecording = async () => {
        try {
            // Request microphone access
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    sampleRate: 44100
                }
            });

            // Detect supported MIME type
            let mimeType = 'audio/webm';
            if (!MediaRecorder.isTypeSupported('audio/webm')) {
                if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
                    mimeType = 'audio/webm;codecs=opus';
                } else if (MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')) {
                    mimeType = 'audio/ogg;codecs=opus';
                } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
                    mimeType = 'audio/mp4';
                } else {
                    // Fallback to default
                    mimeType = '';
                }
            }

            // Create MediaRecorder with supported MIME type
            const options = mimeType ? { mimeType } : {};
            mediaRecorderRef.current = new MediaRecorder(stream, options);

            console.log('Using MIME type:', mimeType || 'default');

            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, {
                    type: mimeType || 'audio/webm'
                });
                await sendAudioToBackend(audioBlob);

                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.onerror = (event) => {
                console.error('MediaRecorder error:', event.error);
                setIsListening(false);
                setTranscript('');
                alert('Recording error: ' + event.error.name);
            };

            mediaRecorderRef.current.start();
            setIsListening(true);
            setTranscript('Recording...');

            console.log('Recording started successfully');
        } catch (error) {
            console.error('Error accessing microphone:', error);

            let errorMessage = 'Could not access microphone. ';

            if (error.name === 'NotAllowedError') {
                errorMessage += 'Please allow microphone access in your browser settings.';
            } else if (error.name === 'NotFoundError') {
                errorMessage += 'No microphone found. Please connect a microphone.';
            } else if (error.name === 'NotReadableError') {
                errorMessage += 'Microphone is already in use by another application.';
            } else {
                errorMessage += error.message;
            }

            alert(errorMessage);
            setIsListening(false);
            setTranscript('');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isListening) {
            mediaRecorderRef.current.stop();
            setIsListening(false);
            setTranscript('Processing...');
        }
    };

    const sendAudioToBackend = async (audioBlob) => {
        setIsProcessing(true);

        try {
            // Convert blob to WAV format (backend expects WAV)
            const formData = new FormData();
            formData.append('file', audioBlob, 'recording.webm');

            const response = await axios.post(`${BACKEND_URL}/upload-voice/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = response.data;

            // Add user message (transcription)
            setMessages(prev => [...prev, {
                type: 'user',
                text: data.transcription
            }]);

            // Add AI response
            setMessages(prev => [...prev, {
                type: 'assistant',
                text: data.ai_response
            }]);

            // Play audio response
            if (data.tts_audio_paths && data.tts_audio_paths.length > 0) {
                await playAudioSequence(data.tts_audio_paths);
            }

            setTranscript('');
        } catch (error) {
            console.error('Error processing audio:', error);
            setMessages(prev => [...prev, {
                type: 'assistant',
                text: 'Sorry, I encountered an error processing your request. Please try again.'
            }]);
            setTranscript('');
        } finally {
            setIsProcessing(false);
        }
    };

    const playAudioSequence = async (audioPaths) => {
        setIsSpeaking(true);

        for (const audioPath of audioPaths) {
            await playAudio(audioPath);
        }

        setIsSpeaking(false);
    };

    const playAudio = (audioPath) => {
        return new Promise((resolve, reject) => {
            const audio = new Audio(audioPath);
            audioElementRef.current = audio;

            audio.onended = () => resolve();
            audio.onerror = (error) => {
                console.error('Error playing audio:', error);
                resolve(); // Continue to next chunk even if one fails
            };

            audio.play().catch(error => {
                console.error('Error playing audio:', error);
                resolve();
            });
        });
    };

    const stopSpeaking = () => {
        if (audioElementRef.current) {
            audioElementRef.current.pause();
            audioElementRef.current.currentTime = 0;
            setIsSpeaking(false);
        }
    };

    const toggleListening = () => {
        if (isListening) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    const handleChatMessage = async (e) => {
        if (e) e.preventDefault();
        if (!inputText.trim() || isProcessing) return;

        const userMessage = inputText;
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputText('');
        setIsProcessing(true);

        try {
            // For chat mode, you could create a text-only endpoint
            // For now, we'll use a simple approach
            const response = await axios.post(`${BACKEND_URL}/chat/`, {
                message: userMessage
            });

            const aiResponse = response.data.response;
            setMessages(prev => [...prev, { type: 'assistant', text: aiResponse }]);

            if (mode === 'voice' && response.data.audio_path) {
                await playAudio(response.data.audio_path);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages(prev => [...prev, {
                type: 'assistant',
                text: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsProcessing(false);
        }
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
                                {(isListening || isSpeaking || isProcessing) && (
                                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                                )}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Namal Assistant</h3>
                                <p className="text-xs text-white/80">
                                    {isListening ? 'Listening...' :
                                        isProcessing ? 'Processing...' :
                                            isSpeaking ? 'Speaking...' : 'Online'}
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
                        {transcript && (
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
                                    disabled={isProcessing}
                                    className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#ffb32c] focus:ring-2 focus:ring-[#ffb32c]/20 disabled:bg-gray-100"
                                />
                                <button
                                    onClick={handleChatMessage}
                                    disabled={isProcessing}
                                    className="bg-[#ffb32c] text-white p-3 rounded-full hover:bg-[#ffa000] transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
                                    disabled={isProcessing}
                                    className={`p-6 rounded-full transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${isListening
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
                                {isListening ? 'Recording... Click to stop' :
                                    isProcessing ? 'Processing your request...' :
                                        'Click microphone to speak'}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default VoiceAssistantWithBackend;
