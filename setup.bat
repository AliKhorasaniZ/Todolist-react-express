@echo off

rem Check if npm is installed
echo Usin npm version:
call npm -v
if %errorlevel% neq 0 (
    echo npm is not installed. Please install Node.js/npm before running this script.
    exit /b 1
)

rem Change directory to the backend folder
cd backend

rem Install dependencies using npm
call npm install

rem Check if the npm install was successful
if %errorlevel% neq 0 (
    echo "npm install failed."
    exit /b 1
)

echo Backend dependencies installed successfully.

rem Create .env file
(
    echo ATLAS_URI=uri_here
    echo PORT=5000
    echo ACCESS_TOKEN_SECRET=0cee08d00b93411c058078ac4f38123f9d16c8b264759f450bd8e0715fa30191
) >> .env

rem Change back to the frontend directory
cd ../frontend

rem Install dependencies using npm
call npm install

rem Check if the npm install was successful
if %errorlevel% neq 0 (
    echo "npm install failed."
    exit /b 1
)

echo Frontend dependencies installed successfully.
pause

