@echo off
echo ============================================================
echo   STT-TTS Backend Setup Script
echo ============================================================
echo.

cd /d "%~dp0stt-tts\stt-tts"

REM Create virtual environment
echo [1/4] Creating virtual environment...
python -m venv venv
if errorlevel 1 (
    echo ERROR: Failed to create virtual environment
    echo Make sure Python 3.11+ is installed
    pause
    exit /b 1
)

REM Activate virtual environment
echo [2/4] Activating virtual environment...
call venv\Scripts\activate.bat

REM Upgrade pip
echo [3/4] Upgrading pip...
python -m pip install --upgrade pip

REM Install dependencies
echo [4/4] Installing dependencies...
pip install -r req.txt

echo.
echo ============================================================
echo   Setup Complete!
echo ============================================================
echo.
echo Next steps:
echo 1. Create/edit .env file with your configuration
echo 2. Set up Weaviate database (see README.md)
echo 3. Run start_backend.bat to start the server
echo.
pause
