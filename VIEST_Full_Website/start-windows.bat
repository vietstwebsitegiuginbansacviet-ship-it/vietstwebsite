@echo off
chcp 65001 >nul
cd /d "%~dp0"
if not exist .env (
  echo Chua co file .env. Hay sao chep .env.example thanh .env va dien thong tin truoc.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Dang cai cac goi can thiet...
  call npm install
  if errorlevel 1 pause & exit /b 1
)
call npm start
pause
