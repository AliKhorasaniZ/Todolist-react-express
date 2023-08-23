# Todolist Webpage using React-Express-MongoDB

This repository provides an example of a simple todolist app constructed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. 
The frontend and backend are located in different directories for further simplicity.

## **Table of Contents** :

- [Project Details](#details)
- [Requirements](#requirements)
- [Setup Instructions](#setup-instructions)
  - [Windows](#windows)
  - [Mac / Linux](#mac-linux)

<a name="details"></a>

## **Project Details** : 

This project uses the following concepts:

- JWT authentication
- React routing using React Router DOM
- MongoDB model schemas
- Axios API

It is possible to run each direcotry seperatly, to do so, after finnishing the setup proccess locato to your desired directory and run npm start.
You would not need to 
  
<a name="requirements"></a>

## **Requirements** :

- Node.js installed on your system ([Download Node.js](https://nodejs.org/en/download/current))
- MongoDB Atlas connection string ([Set up a MongoDB Atlas account](https://discordpy.readthedocs.io/en/stable/discord.html))

<a name="setup-instructions"></a>

## **Setup Instructions** :

1. Clone this repository to a directory of your choice on your local system.

<a name="windows"></a>

### For Windows Users:

2. Run setup.bat located in the main directory.
3. Wait for the batch script to execute and close.
4. Navigate to the main folder and open the .env file.
5. In the .env file, add your Atlas URI (required).
6. Add your preferred localhost port for the backend server to be hosted at (optional, defaults to 5000).
7. Add your JWT secret token for data encryption (optional, default value is provided).
8. The setup process is complete. To start the application, run start.bat.

<a name="mac-linux"></a>

### For Mac / Linux Users:

If you are using a Unix-based operating system, you will need to manually perform the steps listed in the setup.bat file, as batch files are not executable on Unix systems. In general, you would need to:

- Install the dependencies listed in package.json for each of the directories
- Manually create a .env file and provide the required valus as listed in the setup.bat file

If you need more help with executing these commands, I recommend simply asking ChatGPT to provide you with the equivalent .sh commands.
