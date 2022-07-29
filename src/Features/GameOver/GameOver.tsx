import React from 'react';
import loose from '../../game-loose.jpg'
import winning from '../../winning-logo.png'
import Backdrop from '@mui/material/Backdrop';
import { Box, Button } from '@mui/material';
import { BaseProps, GameOver, LoggedInUserDetails } from '../../Models/RoomDetails';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { leaveRoom, selectGameOver, selectLoggedInUser, startNewGame } from '../../Reducers/GameThreeReducer';

function GameOverComponent(props: BaseProps) {
    const gameStatusText = {
        display: 'flex',
        justifyContent: 'center',
        margin: 1,
        marginLeft: '9rem',
        fontSize: '24px',
        fontWeight: 700
    };
    const [open, setOpen] = React.useState(false);
    const [gameStatus, setGameStatus] = React.useState(false);

    const dispatch = useAppDispatch();
    const loggedInUSer: LoggedInUserDetails = useAppSelector(selectLoggedInUser);
    const gameStatusWs: GameOver = useAppSelector(selectGameOver);

    const handleClose = () => {
        setOpen(false);
        props.socket.emit("leaveRoom"); // Clear all data and states when the user leave the room 
        dispatch(leaveRoom(null));
    };

    React.useEffect(() => {
        setOpen(gameStatusWs.isOver || false);
        setGameStatus(gameStatusWs?.user === loggedInUSer?.name);
    }, [gameStatusWs])

    const startGameAgain = () => {
        /*Start initiation the new game by sending the some random Number   */
        props.socket.emit("sendNumber", { number: parseInt((Math.random() * 1000).toFixed(2)), selectedNumber: 0 });
        dispatch(startNewGame([])); // When Game restarts messages should be empty in order to star the fresh game.
    }

    return (<div>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, display: 'block' }}
            open={open} >
            {gameStatus ?
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={loose} alt="Logo" className='loose-icon' />
                    </Box>
                    <Box sx={{ ...gameStatusText }}>Oh Oh .. You Lost </Box>
                </Box>
                :
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={winning} alt="winning" className='winning-icon' />
                    </Box>
                    <Box sx={{ ...gameStatusText }}>Yayy.. You won </Box>
                </Box>
            }
            <Box sx={{ ...gameStatusText }}>
                <Button sx={{ backgroundColor: 'white', color: '#1976d2', fontWeight: 600, ":hover": { backgroundColor: '#1976d2', color: 'white', } }} onClick={startGameAgain}>New Game</Button>
            </Box>
        </Backdrop>
    </div>);
}

export default GameOverComponent;
