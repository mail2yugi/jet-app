import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, List, ListItemButton, ListItemText } from '@mui/material';
import Room from '../Room/Room';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchRoomsAsync } from '../../Actions/GameThreeActions';
import { selectRooms } from '../../Reducers/GameThreeReducer';
import { BaseProps, RoomDetails } from '../../Models/RoomDetails';
import GameOverComponent from '../GameOver/GameOver';


const Home = (props: BaseProps) => {
    const dispatch = useAppDispatch();
    const rooms: Array<RoomDetails> = useAppSelector(selectRooms);
    const [selectedRoom, setSelectedRoom] = React.useState<RoomDetails>(null!);
    const [selectedIndex, setSelectedIndex] = React.useState<number>();

    const roomClickHandler = (index: number, room: RoomDetails) => {
        setSelectedIndex(index); // To display the selection state of the menu bar 
        setSelectedRoom(room); // To Bring the up the Game room Area to User.
    }

    React.useEffect(() => {
        dispatch(fetchRoomsAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box component="div">
            <Grid container>
                <Grid item xs={5} sm={4} md={2}>
                    <Box component="div">
                        <Box sx={{ margin: 2, fontSize: '1.2rem', lineHeight: 1.5 }} component="div">Choose your game room</Box>
                        <List sx={{ bgcolor: 'background.paper', margin: 1 }}
                            component="nav">
                            {rooms.map((room, index) => {
                                return (
                                    <React.Fragment key={room.id + "_" + index}>
                                        <ListItemButton
                                            sx={{
                                                "&.Mui-selected": {
                                                    backgroundColor: "#0476f9",
                                                    color: 'white'
                                                },
                                                ":hover": {
                                                    backgroundColor: "#0476f9",
                                                    color: 'white'
                                                },
                                                borderBottom: '1px solid #f0f0f0',
                                            }}
                                            selected={selectedIndex === index}
                                            onClick={roomClickHandler.bind(this, index, room)}>
                                            <ListItemText primary={room.name} sx={{ lineHeight: "16px" }} /> <ArrowForwardIosIcon />
                                        </ListItemButton>
                                    </React.Fragment>
                                )
                            })}
                        </List>
                    </Box>
                </Grid>
                {selectedRoom ?
                    <Grid item xs={7} sm={7} md={9}>
                        <Box sx={{ padding: 2, maxHeight: '85vh', overflowY: 'scroll', marginLeft: 2, marginRight: 2, backgroundColor: 'white' }} component="div">
                            <Room room={selectedRoom} {...props} />
                        </Box>
                        <GameOverComponent {...props} />
                    </Grid> : null}
            </Grid>
        </Box>
    );
}

export default Home;