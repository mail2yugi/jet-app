import * as React from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchRoomsAsync } from '../../Actions/GameThreeActions';
import { BaseProps, RandomNumberModel, RoomDetails, UserDetails } from '../../Models/RoomDetails';
import { Button } from '@mui/material';
import {
    leaveRoom,
    selectMessangerList,
    selectPlayingWithUser,
    selectRoomStatus,
    selectRoomUser
} from '../../Reducers/GameThreeReducer';
import MessangerCard from '../Messanger/MessangerCard';

interface RoomProps extends BaseProps {
    room: RoomDetails
}

export interface Messanger extends RoomProps {
    randomNumber: Array<RandomNumberModel>
}

const Room = (props: RoomProps) => {
    const dispatch = useAppDispatch();

    const playingWithUser: UserDetails = useAppSelector(selectPlayingWithUser);
    const roomUser: UserDetails = useAppSelector(selectRoomUser);
    const roomStatus: boolean = useAppSelector(selectRoomStatus);
    const messangerList: Array<RandomNumberModel> = useAppSelector(selectMessangerList);

    React.useEffect(() => {
        dispatch(fetchRoomsAsync()); // Fetch the Rooms List for Menu
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const joinRoom = () => {
        // While user request to join room, will emit back the state fo your turn in the room 
        props.socket.emit("joinRoom", {
            username: props.user.name,
            room: props.room,
            roomType: props.room.type
        });
    }

    const onLeaveRoom = () => {
        dispatch(leaveRoom(null)); // just logout the user withoiut emiting any events.
    }

    const onLeaveRoomExitRoom = () => {
        props.socket.emit("leaveRoom"); // When user is waiting in the room, while leave clear all the data.
        onLeaveRoom();
    }

    const startGame = () => {
        props.socket.emit("sendNumber", { number: parseInt((Math.random() * 1000).toFixed(2)), selectedNumber: 0 });
    }

    return (
        <Box component="div" sx={{ marginBottom: '110px' }} textAlign='center'>
            {roomUser ? roomStatus ?
                messangerList?.length > 0 ?
                    <MessangerCard {...props} randomNumber={messangerList} />
                    : roomUser.room.type.toUpperCase() === 'CPU' ?
                        <Button
                            fullWidth
                            variant="contained"
                            className='jet-btn'
                            onClick={startGame}
                            sx={{ mt: 3, mb: 2 }} > Start the Game </Button>
                        : playingWithUser ? "Waiting for other player to start the game." :
                            <Button
                                fullWidth
                                variant="contained"
                                className='jet-btn'
                                onClick={startGame}
                                sx={{ mt: 3, mb: 2 }} > Lets Paly </Button>
                : roomUser.room.type.toUpperCase() === 'CPU' ?
                    <Button
                        fullWidth
                        variant="contained"
                        className='jet-btn'
                        onClick={onLeaveRoom}
                        sx={{ mt: 3, mb: 2 }} > Room is busy, Leave the room </Button>
                    : <Button
                        fullWidth
                        variant="contained"
                        className='jet-btn'
                        onClick={onLeaveRoomExitRoom}
                        sx={{ mt: 3, mb: 2 }} > Wait for other to join, Leave the room </Button>
                : <Button
                    fullWidth
                    variant="contained"
                    className='jet-btn'
                    onClick={joinRoom}
                    sx={{ mt: 3, mb: 2 }} > Join the room  </Button>}
        </Box>
    );
}

export default Room;