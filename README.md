# Just Est Takeaway front-end challenge

![](https://img.shields.io/badge/Code-React-orange)
![](https://img.shields.io/badge/CSS%20Framework-MUI-orange)
![](https://img.shields.io/badge/Code-Typescript-informational?style=flat&logo=typescript&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Editor-VsCode-informational?style=flat&logo=visualstudio&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Code-Redux-yellowgreen)
![](https://img.shields.io/badge/Tools-Socket.io-informational?style=flat&logo=socket.io&logoColor=white&color=2bbc8a)
![](https://img.shields.io/badge/Package-Npm-informational?style=flat&logo=npm&logoColor=white&color=2bbc8a)


# Introduction
A Front-end technical challenge: Two users once logged in can choose a playing room and can start the  game. Users can be a CPU and a USER or both USERS and vice versa. The game starts with a whole number where the participants can choose among -1, 0, 1. Among the participants who received 1 as the result, looses the game, and also can start with a new game again.
​

## Server setup
First clone the repository(https://github.com/takeaway/scoober-fe-challenge-starter) in your local machine. You have two different options for starting the application: first is via **Docker** and the second is for **NON Docker Users**.

### **Docker Desktop Users**

 - Rename `.env.example` to `.env` 
 - Simply run `docker-compose up --build`

### **Non Docker Users**
In your root folder where the repository is cloned, run the following commands:
 - Rename `.env.example` to `.env` 
 - **CAUTION! please be sure that you start the npm commands inside `./wss/` folder**
 - `cd ./wss`
 - `npm install`
 - Starting the fake DB JsonServer: `npm run start:server` 
 - Open a new terminal and type: `npm run start`. This will establish the socket connection 

## Clint Setup and Available Scripts

Clone the https://github.com/mail2yugi/jet-app/ 

### `cd jet-app`
project root foler


### `npm i`
Install the node dependency's

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

