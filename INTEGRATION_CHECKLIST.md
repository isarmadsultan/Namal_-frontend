# ✅ STT-TTS Integration Checklist

Use this checklist to track your progress in setting up and integrating the STT-TTS backend with your voice assistant.

---

## 📦 Phase 1: Backend Setup

### Initial Setup
- [ ] Navigate to project directory: `e:\namal_frontend\my-app`
- [ ] Verify Python 3.11+ is installed: `python --version`
- [ ] Run `setup_backend.bat` (double-click)
- [ ] Wait for installation to complete (may take 5-10 minutes)

### Configuration
- [ ] Locate `.env` file in `stt-tts\stt-tts\`
- [ ] Get OpenAI API key from https://platform.openai.com/api-keys
- [ ] Add API key to `.env`: `OPENAI_API_KEY=sk-...`
- [ ] Review other settings in `.env` (optional)

### Weaviate Database
- [ ] Check if Weaviate is needed (for RAG functionality)
- [ ] Install Docker Desktop (if using Docker for Weaviate)
- [ ] Run Weaviate: `cd stt-tts\stt-tts\backend && docker-compose up -d`
- [ ] Verify Weaviate is running: http://localhost:9000

### Test Backend
- [ ] Run `start_backend.bat` (double-click)
- [ ] Wait for "All services initialized successfully" message
- [ ] Open browser to http://localhost:8000/docs
- [ ] Test `/health` endpoint (should return status)
- [ ] Keep backend running for next phase

---

## 🔗 Phase 2: Frontend Integration

### Install Dependencies
- [ ] Open new terminal in `e:\namal_frontend\my-app`
- [ ] Run: `npm install axios`
- [ ] Verify installation in `package.json`

### Update Component
- [ ] Locate `src/App.jsx` (or your main app file)
- [ ] Import new component: `import VoiceAssistantWithBackend from './components/VoiceAssistantWithBackend';`
- [ ] Replace old component with new one
- [ ] Save changes

### Configure CORS (if needed)
- [ ] If you get CORS errors, add to backend `main.py`:
  ```python
  from fastapi.middleware.cors import CORSMiddleware
  
  app.add_middleware(
      CORSMiddleware,
      allow_origins=["http://localhost:3000", "http://localhost:5173"],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
  )
  ```
- [ ] Restart backend after adding CORS

### Start Frontend
- [ ] Run: `npm start` or `npm run dev`
- [ ] Wait for app to open in browser
- [ ] Verify no console errors

---

## 🧪 Phase 3: Testing

### Basic Functionality
- [ ] Click floating microphone button
- [ ] Voice assistant modal opens
- [ ] See "Namal Assistant" header
- [ ] See "Voice" and "Chat" mode buttons

### Voice Mode Testing
- [ ] Switch to "Voice" mode
- [ ] Click microphone button
- [ ] Browser asks for microphone permission → Allow
- [ ] Speak a test question (e.g., "What is Namal University?")
- [ ] Click microphone again to stop recording
- [ ] See "Processing..." status
- [ ] See your transcribed text appear
- [ ] See AI response appear
- [ ] Hear audio response playing

### Chat Mode Testing
- [ ] Switch to "Chat" mode
- [ ] Type a test message
- [ ] Press Enter or click Send
- [ ] See your message appear
- [ ] See AI response appear

### Error Handling
- [ ] Test with backend stopped (should show error message)
- [ ] Test with no microphone permission (should show alert)
- [ ] Test with empty message (should not send)

---

## 🐛 Phase 4: Troubleshooting

### If Backend Won't Start
- [ ] Check Python version: `python --version`
- [ ] Check virtual environment exists: `stt-tts\stt-tts\venv`
- [ ] Re-run `setup_backend.bat`
- [ ] Check `.env` file exists and has API key
- [ ] Check port 8000 is not in use

### If Frontend Can't Connect
- [ ] Verify backend is running: http://localhost:8000/health
- [ ] Check browser console for errors (F12)
- [ ] Verify `BACKEND_URL` in component is correct
- [ ] Add CORS middleware to backend
- [ ] Try different browser (Chrome recommended)

### If Audio Doesn't Work
- [ ] Check microphone permissions in browser
- [ ] Check browser supports MediaRecorder API
- [ ] Check audio files in backend response
- [ ] Test audio URL directly in browser
- [ ] Check browser console for playback errors

### If Transcription Fails
- [ ] Check OpenAI API key is valid
- [ ] Check API credits are available
- [ ] Check Whisper model is loaded (backend logs)
- [ ] Try smaller audio file
- [ ] Check audio format is supported

---

## 📊 Phase 5: Verification

### Backend Health Check
- [ ] Visit http://localhost:8000/health
- [ ] Verify all services are "healthy"
- [ ] Check Whisper model is loaded
- [ ] Check Weaviate is connected
- [ ] Check TTS service is initialized

### API Testing
- [ ] Visit http://localhost:8000/docs
- [ ] Test `/upload-voice/` endpoint manually
- [ ] Upload a test audio file
- [ ] Verify response contains:
  - [ ] transcription
  - [ ] ai_response
  - [ ] tts_audio_paths
  - [ ] timing metrics

### Frontend Testing
- [ ] Test voice recording
- [ ] Test audio playback
- [ ] Test chat messaging
- [ ] Test mode switching
- [ ] Test error handling
- [ ] Test UI responsiveness

---

## 🎯 Phase 6: Optimization (Optional)

### Performance
- [ ] Monitor API response times
- [ ] Check audio chunk streaming
- [ ] Optimize Whisper model size
- [ ] Enable GPU acceleration (if available)

### Customization
- [ ] Change TTS voice in `.env`
- [ ] Adjust Whisper model size
- [ ] Customize AI prompts
- [ ] Add custom knowledge to Weaviate

### Production Readiness
- [ ] Add error logging
- [ ] Add usage analytics
- [ ] Implement rate limiting
- [ ] Add authentication (if needed)
- [ ] Set up environment variables properly
- [ ] Test on different devices/browsers

---

## 📝 Notes & Issues

### Issues Encountered:
```
Date: ___________
Issue: _______________________________________________________
Solution: _____________________________________________________
```

### Configuration Changes:
```
Date: ___________
Changed: ______________________________________________________
Reason: _______________________________________________________
```

### Performance Metrics:
```
Average transcription time: _______ seconds
Average response time: _______ seconds
Average audio generation time: _______ seconds
Total pipeline time: _______ seconds
```

---

## ✅ Completion Status

- [ ] Backend is running successfully
- [ ] Frontend is integrated and working
- [ ] Voice mode works correctly
- [ ] Chat mode works correctly
- [ ] Audio playback works
- [ ] Error handling is functional
- [ ] All tests passed

**Date Completed**: ___________

**Notes**: 
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## 🎓 Next Steps After Completion

1. [ ] Read advanced configuration in STT_TTS_INTEGRATION_GUIDE.md
2. [ ] Explore API documentation at /docs
3. [ ] Customize for your specific use case
4. [ ] Add your own knowledge base
5. [ ] Deploy to production (if needed)

---

**Need Help?** 
- Quick answers: QUICK_START.md
- Technical details: STT_TTS_INTEGRATION_GUIDE.md
- Full summary: INTEGRATION_SUMMARY.md
