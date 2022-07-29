import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SnackBar from '../SnackBar/SnackBar';

const theme = createTheme();

function SignIn(props: any) {

    const [open, setOpen] = React.useState(false);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('name')) {
            props.socket.emit("login", { username: data.get('name') });
        } else {
            setOpen(true);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className='Login-container'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Wanna Play ?
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Enter Name"
                            name="name"
                            autoComplete="email"
                            autoFocus />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className='jet-btn'
                            sx={{ mt: 3, mb: 2, backgroundColor: '#ff8000' }} >   I am In
                        </Button>
                    </Box>
                </Box>
            </Container>
            <SnackBar open={open} setOpen={setOpen} message={"Please enter name to login."}/>
        </ThemeProvider>
    );
}

export default SignIn;