@echo off
setlocal

call npm install
echo Building Project...
call npm run build
echo Packaging...
call npx electron-packager . --overwrite
echo Build completed
pause