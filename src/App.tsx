import React from 'react';
import './App.css';
import CoreLayout from './Features/CoreLayout/CoreLayout';
import SignIn from './Features/Common/SignIn/SignIn';
import { ActivateUser, GameOver } from './Models/RoomDetails';
import {
  activateYourTurn,
  gameOver,
  onMessage,
  onRandomNumber,
  onReady,
  selectLoggedInUser,
} from './Reducers/GameThreeReducer';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchUserAsync } from './Actions/GameThreeActions';
const io = require("socket.io-client");


function App() {
  const [socket, setSocket] = React.useState(io('ws://localhost:8082'));
  const loggedInUSer = useAppSelector(selectLoggedInUser);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setSocket(socket);
    /*Start Configure the WebSocket Events for Game and supply socket instance to the childern  */
    socket.on('connect', () => console.log(`Client connected: ${socket.id}`));
    socket.on('disconnect', (reason: any) => console.log(`Client disconnected: ${reason}`));
    socket.on('connect_error', (reason: any) => console.log(`Client connect_error: ${reason}`));
    socket.on('message', (msg: any) => {
      if (msg['socketId']) {
        dispatch(fetchUserAsync(msg['socketId']));
      } else {
        dispatch(onMessage(msg));
      }
    });
    socket.on('randomNumber', (msg: any) => dispatch(onRandomNumber(msg)));
    socket.on('onReady', (msg: any) => dispatch(onReady(msg)));
    socket.on('activateYourTurn', async (msg: ActivateUser) => dispatch(activateYourTurn(msg)));
    socket.on('gameOver', (msg: any) => dispatch(gameOver(msg)));
    /*End Configure the WebSocket Events for Game and supply socket instance to the childern  */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*Based on Uer login conditionally display the component to start the gam. router is not neede since every login needs fresh state of Game */
  return (loggedInUSer && Object.keys(loggedInUSer).length > 0 ?
    <CoreLayout socket={socket} user={loggedInUSer} /> :
    <SignIn socket={socket} />);
}

export default App;
