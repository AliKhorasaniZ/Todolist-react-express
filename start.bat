@echo off

rem Change directory to the frontend folder
cd backend

rem Start server.js usng Nodemon in a new command line windows
start cmd /k call npm start

rem Change to the frontend directory
cd ../frontend

rem Start React-script in a new command line windows
start cmd /k call npm start



