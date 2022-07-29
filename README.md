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

## UI Screen References


![image](https://user-images.githubusercontent.com/25095536/181831408-5fd4aaeb-70fc-4850-ae5f-41d08b48e23b.png)
![image](https://user-images.githubusercontent.com/25095536/181831455-40d66a69-1b29-4b37-aa60-1ff5ad234543.png)

### When Playing against CPU

![image](https://user-images.githubusercontent.com/25095536/181831475-46e0905d-0add-44b5-b2b9-5665327e2887.png)
![image](https://user-images.githubusercontent.com/25095536/181831490-b81bfa77-9701-41bd-886d-5e8ac6db9aaf.png)
![image](https://user-images.githubusercontent.com/25095536/181831510-9c7e4d26-2ca9-492f-bf97-5899be4e7004.png)
![image](https://user-images.githubusercontent.com/25095536/181831518-9ea3d8ab-bfcd-4c53-92a5-f90e346ec182.png)

### When twos users are playing
![image](https://user-images.githubusercontent.com/25095536/181831707-e221dea9-639a-44ec-94e4-9bcdbd56d8b7.png)
![image](https://user-images.githubusercontent.com/25095536/181831712-e3b0a0c6-bd0e-440a-9dd3-b050af5e76ff.png)
![image](https://user-images.githubusercontent.com/25095536/181831726-ecf3ca91-e64f-4985-93d0-dfe99717e803.png)
![image](https://user-images.githubusercontent.com/25095536/181831736-af368852-9e78-4417-b5c8-ce8adb954d0d.png)
![image](https://user-images.githubusercontent.com/25095536/181830456-282e1748-6958-4c62-80ea-6688b96d2a28.png)
