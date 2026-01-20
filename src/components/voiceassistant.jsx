import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Send, X, Volume2, VolumeX, MessageSquare, Phone } from 'lucide-react';

const VoiceAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('voice'); // 'voice' or 'chat'
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'assistant', text: 'Hello! I\'m Namal University\'s AI assistant. How can I help you today?' }
    ]);
    const [inputText, setInputText] = useState('');
    const [transcript, setTranscript] = useState('');
    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);
    const synthRef = useRef(null);

    // Initialize speech recognition and synthesis
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                let interimTranscript = '';
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript + ' ';
                    } else {
                        interimTranscript += transcript;
                    }
                }

                setTranscript(finalTranscript || interimTranscript);

                if (finalTranscript) {
                    handleVoiceMessage(finalTranscript.trim());
                }
            };

            recognitionRef.current.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);
            };
        }

        synthRef.current = window.speechSynthesis;

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            if (synthRef.current) {
                synthRef.current.cancel();
            }
        };
    }, []);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
            setIsListening(false);
            setTranscript('');
        } else {
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const speakText = (text) => {
        if (synthRef.current && mode === 'voice') {
            synthRef.current.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 1.0;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);

            synthRef.current.speak(utterance);
        }
    };

    const stopSpeaking = () => {
        if (synthRef.current) {
            synthRef.current.cancel();
            setIsSpeaking(false);
        }
    };

    const handleVoiceMessage = (text) => {
        const newMessage = { type: 'user', text };
        setMessages(prev => [...prev, newMessage]);
        setTranscript('');

        // Simulate AI response
        setTimeout(() => {
            const response = getAIResponse(text);
            setMessages(prev => [...prev, { type: 'assistant', text: response }]);
            speakText(response);
        }, 1000);
    };

    const handleChatMessage = (e) => {
        if (e) e.preventDefault();
        if (!inputText.trim()) return;

        const newMessage = { type: 'user', text: inputText };
        setMessages(prev => [...prev, newMessage]);
        setInputText('');

        // Simulate AI response
        setTimeout(() => {
            const response = getAIResponse(inputText);
            setMessages(prev => [...prev, { type: 'assistant', text: response }]);
            if (mode === 'voice') {
                speakText(response);
            }
        }, 1000);
    };

    const getAIResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        if (message.includes('admission')) {
            return 'Admissions for 2026 are now open! We offer undergraduate and graduate programs in Engineering, Computer Science, Management Sciences, and more. Would you like to know about specific requirements?';
        } else if (message.includes('program') || message.includes('course')) {
            return 'Namal University offers BS programs in Computer Science, Electrical Engineering, Civil Engineering, Management Sciences, and more. We also have MS and PhD programs. Which field interests you?';
        } else if (message.includes('fee') || message.includes('cost')) {
            return 'Our fee structure varies by program. For detailed information about tuition fees and available scholarships, please visit our admissions office or check our website. We offer need-based financial aid to deserving students.';
        } else if (message.includes('location') || message.includes('where')) {
            return 'Namal University is located in Mianwali, Punjab, Pakistan. Our campus spans over 100 acres with state-of-the-art facilities.';
        } else if (message.includes('contact')) {
            return 'You can reach us at admissions@namal.edu.pk or call +92-459-220466. Our office hours are Monday to Friday, 9 AM to 5 PM.';
        } else {
            return 'I\'m here to help! You can ask me about admissions, programs, fees, campus facilities, or any other information about Namal University.';
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
                                if (isListening) recognitionRef.current?.stop();
                                setIsListening(false);
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
                                if (isListening) {
                                    recognitionRef.current?.stop();
                                    setIsListening(false);
                                }
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