# 🎙️ STT-TTS Integration Guide for Voice Assistant

This guide explains how to run the STT-TTS backend module and integrate it with your React Voice Assistant component.

## 📋 Table of Contents
1. [System Overview](#system-overview)
2. [Prerequisites](#prerequisites)
3. [Setting Up the STT-TTS Backend](#setting-up-the-stt-tts-backend)
4. [Running the Backend](#running-the-backend)
5. [Integrating with Voice Assistant Component](#integrating-with-voice-assistant-component)
6. [Testing the Integration](#testing-the-integration)
7. [Troubleshooting](#troubleshooting)

---

## 🏗️ System Overview

### Current Architecture
```
┌─────────────────────┐
│  React Frontend     │
│  (voiceassistant.jsx)│
│  - Browser STT      │  ← Currently using Web Speech API
│  - Browser TTS      │
└─────────────────────┘
```

### Target Architecture with STT-TTS Integration
```
┌─────────────────────┐
│  React Frontend     │
│  (voiceassistant.jsx)│
└──────────┬──────────┘
           │ HTTP POST (audio file)
           ↓
┌─────────────────────┐
│   FastAPI Backend   │
│   (Port 8000)       │
└──────────┬──────────┘
           │
           ├─→ Whisper STT (OpenAI)
           ├─→ Weaviate Vector DB (RAG)
           ├─→ GPT-4o-mini (AI Response)
           └─→ OpenAI TTS (Speech Output)
```

---

## 📦 Prerequisites

### 1. Python Environment
- **Python 3.11+** installed
- Virtual environment support

### 2. Required Services
- **OpenAI API Key** (for Whisper, GPT, and TTS)
- **Weaviate Vector Database** (running locally or remotely)
- **GPU** (optional but recommended for faster Whisper transcription)

### 3. System Requirements
- Microphone access
- Audio playback capability
- At least 4GB RAM (8GB+ recommended)
- 2GB+ disk space for models

---

## 🚀 Setting Up the STT-TTS Backend

### Step 1: Navigate to Backend Directory
```bash
cd e:\namal_frontend\my-app\stt-tts\stt-tts
```

### Step 2: Create and Activate Virtual Environment
```bash
# Create virtual environment
python -m venv venv

# Activate it (Windows)
venv\Scripts\activate
```

### Step 3: Install Dependencies
```bash
pip install -r req.txt
```

**Note**: If you have a GPU, install the appropriate PyTorch version:
```bash
# For CUDA 11.8
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# For CUDA 12.1
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121
```

### Step 4: Configure Environment Variables

Create or edit the `.env` file in `stt-tts\stt-tts\` directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Whisper Model Configuration
WHISPER_MODEL=medium  # Options: tiny, base, small, medium, large
CUDA_DEVICE=0         # GPU index (0 for first GPU, use "cpu" for CPU-only)

# Weaviate Configuration
WEAVIATE_COLLECTION_NAME=Document
WEAVIATE_HOST=localhost
WEAVIATE_PORT=9000
WEAVIATE_GRPC_PORT=50051

# TTS Configuration
TTS_VOICE=alloy       # Options: alloy, echo, fable, onyx, nova, shimmer
TTS_MODEL=tts-1       # Options: tts-1, tts-1-hd
TTS_OPTIMIZATION=default  # Options: default, throughput, quality
TTS_MAX_CONCURRENT=5
TTS_MAX_RETRIES=2

# Audio Playback
ENABLE_AUDIO_PLAYBACK=true
```

### Step 5: Set Up Weaviate Vector Database

You need a running Weaviate instance with your knowledge base embedded.

#### Option A: Using Docker (Recommended)
```bash
cd backend
docker-compose up -d
```

#### Option B: Using Weaviate Cloud
Update `.env` with your Weaviate cloud credentials.

### Step 6: Verify Database Setup
```bash
cd backend
python check_db.py
```

This should confirm that your Weaviate collection exists and contains documents.

---

## ▶️ Running the Backend

### Start the FastAPI Server

```bash
cd e:\namal_frontend\my-app\stt-tts\stt-tts\backend
uvicorn main:app --reload --port 8000 --host 0.0.0.0
```

**Expected Output:**
```
============================================================
🚀 Starting Streaming Voice API with SOLID TTS
============================================================

🔄 Loading Whisper model 'medium'...
✅ Whisper loaded on cuda:0

🔄 Initializing Weaviate...
✅ Weaviate collection 'Document' loaded

🔄 Initializing TTS Service...
✅ TTS Service initialized (Default mode)

✅ All services initialized successfully
============================================================

INFO:     Uvicorn running on http://0.0.0.0:8000
```

### Verify Backend is Running

Open your browser and navigate to:
- **API Docs**: http://localhost:8000/docs
- **Health Check**: http://localhost:8000/health

---

## 🔗 Integrating with Voice Assistant Component

Now you need to modify your `voiceassistant.jsx` to send audio to the backend instead of using browser APIs.

### Step 1: Install Required Dependencies

In your React project root:
```bash
cd e:\namal_frontend\my-app
npm install axios
```

### Step 2: Update Voice Assistant Component

The current `voiceassistant.jsx` uses:
- **Browser Web Speech API** for STT (lines 20-63)
- **Browser Speech Synthesis** for TTS (lines 81-94)

You need to replace these with API calls to your backend.

### Key Changes Needed:

#### A. Replace Browser STT with Backend API
Instead of using `webkitSpeechRecognition`, you'll:
1. Record audio using `MediaRecorder` API
2. Send the audio file to `/upload-voice/` endpoint
3. Receive transcription + AI response + TTS audio

#### B. Replace Browser TTS with Backend Audio
Instead of using `speechSynthesis`, you'll:
1. Receive audio file paths from the backend
2. Play the audio files directly

### Step 3: Create Updated Voice Assistant Component

I'll create a new version that integrates with your backend:

```javascript
// src/components/VoiceAssistantWithBackend.jsx
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

    const BACKEND_URL = 'http://localhost:8000';

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            mediaRecorderRef.current = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            
            audioChunksRef.current = [];
            
            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            
            mediaRecorderRef.current.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                await sendAudioToBackend(audioBlob);
                
                // Stop all tracks
                stream.getTracks().forEach(track => track.stop());
            };
            
            mediaRecorderRef.current.start();
            setIsListening(true);
            setTranscript('Recording...');
        } catch (error) {
            console.error('Error accessing microphone:', error);
            alert('Could not access microphone. Please check permissions.');
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
                            <span className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-75 animate-ping"></span>
                            <span className="absolute inset-0 rounded-full border-4 border-teal-400 opacity-50"></span>
                        </div>
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
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                                mode === 'voice'
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
                            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                                mode === 'chat'
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
                                    className={`max-w-[80%] p-3 rounded-2xl ${
                                        message.type === 'user'
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
                                    className={`p-6 rounded-full transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
                                        isListening
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
                                    className={`p-4 rounded-full transition-all ${
                                        isSpeaking
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
```

---

## ✅ Testing the Integration

### 1. Start the Backend
```bash
cd e:\namal_frontend\my-app\stt-tts\stt-tts\backend
uvicorn main:app --reload --port 8000
```

### 2. Start the Frontend
```bash
cd e:\namal_frontend\my-app
npm run dev
```

### 3. Test Voice Interaction
1. Click the floating microphone button
2. Click the microphone icon to start recording
3. Speak your question (e.g., "What programs does Namal offer?")
4. Click again to stop recording
5. Wait for the AI response to be spoken back

### 4. Verify in Browser Console
Check for:
- Successful API calls to `http://localhost:8000/upload-voice/`
- Transcription text
- AI response
- Audio playback

---

## 🐛 Troubleshooting

### Backend Issues

#### 1. Weaviate Connection Error
```
❌ Weaviate initialization failed
```
**Solution**: Ensure Weaviate is running:
```bash
cd backend
docker-compose up -d
```

#### 2. CUDA/GPU Errors
```
❌ Whisper failed to load: CUDA error
```
**Solution**: Switch to CPU mode in `.env`:
```env
WHISPER_MODEL=base  # Use smaller model
CUDA_DEVICE=cpu
```

#### 3. OpenAI API Errors
```
❌ TTS Service initialization failed
```
**Solution**: Verify your API key in `.env`:
```env
OPENAI_API_KEY=sk-...your-key-here
```

### Frontend Issues

#### 1. CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Add CORS middleware to backend `main.py`:
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### 2. Microphone Permission Denied
**Solution**: 
- Check browser permissions
- Use HTTPS or localhost
- Try different browser

#### 3. Audio Not Playing
**Solution**:
- Check browser console for errors
- Verify audio file paths in response
- Test audio URL directly in browser

---

## 📝 API Endpoint Reference

### POST `/upload-voice/`

**Request:**
```
Content-Type: multipart/form-data
file: <audio file (WAV, WebM, MP3)>
```

**Response:**
```json
{
  "filename": "recording.webm",
  "content_type": "audio/webm",
  "transcription": "What programs does Namal offer?",
  "ai_response": "Namal University offers BS programs in Computer Science...",
  "tts_audio_paths": [
    "/tmp/tts_audio/chunk_0.mp3",
    "/tmp/tts_audio/chunk_1.mp3"
  ],
  "num_audio_chunks": 2,
  "total_audio_duration": 15.5,
  "timing": {
    "transcription": 2.3,
    "parallel_rag_tts": 8.1,
    "time_to_first_audio": 3.2,
    "total_time": 10.5
  },
  "status": "success"
}
```

---

## 🎯 Next Steps

1. **Add Chat Endpoint**: Create a text-only endpoint for chat mode
2. **Improve Error Handling**: Add retry logic and better error messages
3. **Add Loading States**: Show progress indicators during processing
4. **Optimize Performance**: Cache responses, compress audio
5. **Add Analytics**: Track usage metrics and response times

---

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [OpenAI Whisper](https://github.com/openai/whisper)
- [Weaviate Documentation](https://weaviate.io/developers/weaviate)
- [React MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)

---

**Made with ❤️ for Namal University**
