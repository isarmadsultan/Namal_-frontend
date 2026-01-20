@echo off
echo ============================================================
echo   Starting STT-TTS Backend Server
echo ============================================================
echo.

cd /d "%~dp0stt-tts\stt-tts"

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found!
    echo Please run: python -m venv venv
    echo Then run: venv\Scripts\activate
    echo Then run: pip install -r req.txt
    pause
    exit /b 1
)

REM Activate virtual environment
echo Activating virtual environment...
call venv\Scripts\activate.bat

REM Check if .env file exists
if not exist ".env" (
    echo WARNING: .env file not found!
    echo Please create .env file with your OpenAI API key
    echo.
    echo Creating .env from .env.example...
    if exist ".env.example" (
        copy .env.example .env
        echo .env file created. Please edit it and add your OpenAI API key.
    )
    echo.
    pause
)

REM Navigate to backend directory
cd backend

REM Start the server
echo.
echo Starting FastAPI server on http://localhost:8000
echo.
echo IMPORTANT: Keep this window open while using the voice assistant!
echo Press Ctrl+C to stop the server
echo.
echo ============================================================
echo.

uvicorn main:app --reload --port 8000 --host 0.0.0.0
