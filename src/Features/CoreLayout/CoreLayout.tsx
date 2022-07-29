import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../logo.png';

import Home from '../Home/Home';
import { BaseProps, UserDetails } from '../../Models/RoomDetails';
import { useAppSelector } from '../../store/hooks';
import { selectPlayingWithUser } from '../../Reducers/GameThreeReducer';
import Footer from '../Common/Footer/Footer';


const CoreLayout = (props: BaseProps) => {
    const playingUser: UserDetails = useAppSelector(selectPlayingWithUser);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#ff8000" }}>
                <Toolbar>
                    <img src={Logo} alt="Logo" className='logo' />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 1, fontSize: 24 }} >
                        {playingUser ? 'Playing with ' + playingUser.user : 'Welcome ' + props.user?.name}
                        <Typography variant="body2" sx={{ flexGrow: 1, fontSize: 16 }} >
                            win the game or win the job
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Home {...props} />
            <Footer />
        </Box>
    );
}

export default CoreLayout;