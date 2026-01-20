# Quick Start Guide: STT-TTS Integration

## 🚀 How to Run the STT-TTS Module

### Option 1: Using Batch Scripts (Easiest)

#### First Time Setup:
1. Double-click `setup_backend.bat`
2. Wait for installation to complete
3. Edit `.env` file in `stt-tts\stt-tts\` with your OpenAI API key

#### Every Time You Want to Run:
1. Double-click `start_backend.bat`
2. Wait for "All services initialized successfully" message
3. Backend will be running on http://localhost:8000

### Option 2: Manual Setup

```bash
# Navigate to backend
cd e:\namal_frontend\my-app\stt-tts\stt-tts

# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Install dependencies (first time only)
pip install -r req.txt

# Start the server
cd backend
uvicorn main:app --reload --port 8000
```

---

## 🔗 How to Connect to Voice Assistant Component

### Option 1: Use the New Backend-Integrated Component

1. **Install axios** (if not already installed):
```bash
cd e:\namal_frontend\my-app
npm install axios
```

2. **Import the new component** in your app:
```javascript
// In your App.jsx or wherever you use the voice assistant
import VoiceAssistantWithBackend from './components/VoiceAssistantWithBackend';

function App() {
  return (
    <div>
      {/* Your other components */}
      <VoiceAssistantWithBackend />
    </div>
  );
}
```

3. **Start your React app**:
```bash
npm run dev
```

### Option 2: Keep Using Browser APIs (Current Setup)

Your current `voiceassistant.jsx` uses browser-based:
- **Web Speech API** for speech recognition
- **Speech Synthesis API** for text-to-speech

This works without a backend but has limitations:
- ❌ No RAG (knowledge base integration)
- ❌ Limited to browser's speech capabilities
- ❌ No conversation history
- ❌ Simple rule-based responses

---

## 📊 Comparison: Browser vs Backend

| Feature | Browser APIs (Current) | Backend Integration (New) |
|---------|----------------------|---------------------------|
| **Setup** | ✅ No setup needed | ⚠️ Requires backend setup |
| **Speech Recognition** | Browser's Web Speech API | 🚀 OpenAI Whisper (more accurate) |
| **AI Responses** | Simple rule-based | 🧠 RAG with knowledge base |
| **Text-to-Speech** | Browser's voices | 🎙️ OpenAI TTS (natural voices) |
| **Offline** | ✅ Works offline | ❌ Requires internet |
| **Accuracy** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Customization** | Limited | Highly customizable |
| **Cost** | Free | Requires OpenAI API credits |

---

## 🎯 Recommended Workflow

### For Development/Testing:
1. Start with browser APIs (current setup) for quick testing
2. No backend needed, works immediately

### For Production:
1. Set up backend with STT-TTS
2. Use `VoiceAssistantWithBackend.jsx`
3. Get better accuracy and RAG capabilities

---

## 📝 Configuration Checklist

### Backend Configuration (.env file):
```env
# Required
OPENAI_API_KEY=sk-your-key-here

# Whisper Settings
WHISPER_MODEL=medium  # or: tiny, base, small, large
CUDA_DEVICE=0         # or: cpu

# Weaviate Settings
WEAVIATE_COLLECTION_NAME=Document
WEAVIATE_HOST=localhost
WEAVIATE_PORT=9000

# TTS Settings
TTS_VOICE=alloy       # or: echo, fable, onyx, nova, shimmer
TTS_MODEL=tts-1       # or: tts-1-hd
```

### Frontend Configuration:
In `VoiceAssistantWithBackend.jsx`, update if needed:
```javascript
const BACKEND_URL = 'http://localhost:8000';
```

---

## 🧪 Testing Steps

### 1. Test Backend Only:
```bash
# Start backend
start_backend.bat

# Open browser
http://localhost:8000/docs

# Try the /health endpoint
```

### 2. Test Frontend Only:
```bash
# Start React app
npm run dev

# Click microphone button
# Should use browser APIs
```

### 3. Test Full Integration:
```bash
# Terminal 1: Start backend
start_backend.bat

# Terminal 2: Start frontend
npm run dev

# Use VoiceAssistantWithBackend component
# Should connect to backend
```

---

## 🐛 Common Issues

### Backend won't start:
- ✅ Check Python version: `python --version` (need 3.11+)
- ✅ Check virtual environment is activated
- ✅ Check .env file exists with API key
- ✅ Check Weaviate is running

### Frontend can't connect:
- ✅ Check backend is running on port 8000
- ✅ Check CORS is enabled in backend
- ✅ Check browser console for errors
- ✅ Verify BACKEND_URL in component

### Audio not working:
- ✅ Check microphone permissions
- ✅ Check browser supports MediaRecorder
- ✅ Check audio files are being generated
- ✅ Try different browser

---

## 📚 Files Created

1. **STT_TTS_INTEGRATION_GUIDE.md** - Comprehensive integration guide
2. **VoiceAssistantWithBackend.jsx** - New component with backend integration
3. **setup_backend.bat** - One-click backend setup
4. **start_backend.bat** - One-click backend start
5. **QUICK_START.md** - This file

---

## 🎓 Learning Path

1. **Start Simple**: Use current browser-based voice assistant
2. **Set Up Backend**: Follow setup_backend.bat
3. **Test Backend**: Use /docs interface
4. **Integrate**: Switch to VoiceAssistantWithBackend
5. **Customize**: Modify prompts, voices, models

---

## 💡 Next Steps

1. ✅ Read STT_TTS_INTEGRATION_GUIDE.md for details
2. ✅ Run setup_backend.bat
3. ✅ Configure .env file
4. ✅ Start backend with start_backend.bat
5. ✅ Install axios in frontend
6. ✅ Test VoiceAssistantWithBackend component

---

**Need Help?** Check the full integration guide: `STT_TTS_INTEGRATION_GUIDE.md`
