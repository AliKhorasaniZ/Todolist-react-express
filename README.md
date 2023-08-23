# Todolist webpage using React-Express-MongoDB

This repository provides an example to a simple todolist app costuructed using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
Frontend and backend are located in diffrent directories for furthur simplecity.

## **Table of contents** :

- [Project Details](#details)
- [Requirments](#Requirments)
- [Setup instructions](#SetupInstructions)
  - [Windows](#Windows)
  - [Mac / Linux](#Mac/Linux)
- [Configuration Guide](#ConfigurationGuide)

<a name="details"></a>

## **Project details** : 

This porject uses the following consepts:

- JWT authentication
- React routing using React-router-dom
- MongoDB model schemas
- Axios Api
  
<a name="Requirments"></a>

## **Requirments** :

- Node.js installed on your system ( [Download Node.js](https://nodejs.org/en/download/current) )
- MongoDB Atlas connection string ( [Set up a MongoDB Atlas account](https://discordpy.readthedocs.io/en/stable/discord.html) )

<a name="SetupInstructions"></a>

## **Setup Instructions** :

1. Clone this repository to a directory of your choice on your local system.

<a name="Windows"></a>

### For windows users:

2. Run setup.bat located in the main directory.
3. Wait for the batch script to execute and close.
4. Navigate to the main folder and open the .env file.
5. In the .env file, add your Atlas URI (required)
6. Add your preferred localhost port for the backend server to be hosted at (optional, defaults to 5000)
7. Add your JWT secret token for data encription (optional, default value is provided).
8. The setup process is complete. To start the application, run start.bat.

<a name="Mac/Linux"></a>

### For mac / linux users:

In the case you are using a unic based operating system, you will need to manually perform the steps listed in hte setup.bat file, as batch files are not exexutable on unix systems. In general, you would need to:

- Install the dependencies listed in package.json for each of the directories
- Manually create a .env file and provide the required tags as listed in the setup.bat file

If you need more help with executing these commands, i recomend simply asking ChatGPT to provide you with .sh commands

<a name="ConfigurationGuide"></a>

## **Configuration guide** :

Configuring your bot is a straightforward process. By creating your own modules and importing them as extensions in main.py or
editing the already existing modules, you can customize your bot's behavior.
Keep in mind to write and edit the code with regards to the Discord.py API reference.

Discord.py API reference: https://discordpy.readthedocs.io/en/stable/api.html
