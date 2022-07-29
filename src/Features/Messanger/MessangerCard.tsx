import Logo from '../../logo.png';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Messanger } from '../Room/Room';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ActivateUser, RandomNumberModel } from '../../Models/RoomDetails';
import { selectActiveSesion } from '../../Reducers/GameThreeReducer';
import { useAppSelector } from '../../store/hooks';

const commonStyles = {
    bgcolor: "#ececec",
    m: 1,
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    color: 'rgb(21, 141, 252)',
    cursor: 'pointer',
};

const MessangerCard = (props: Messanger) => {
    /*  When user is playing 
    *   1) CPU will return the user turn to play
    *   2) When Playing with Human, your turn will become wait and second user state become wait,
    *       use them via Socket they have connected in order to play efficiently.
    */
    const messagesEndRef: any = React.createRef();
    const activateTurn: ActivateUser = useAppSelector(selectActiveSesion);

    const onClick = (selecNumber: number) => {
        /*Selected number will be emit the next user in order and wait for turn */
        props.socket.emit("sendNumber", { number: props.randomNumber[props.randomNumber.length - 1].number, selectedNumber: selecNumber })
    }

    React.useEffect(() => {
        /*Auto Scrolll to bottom since option will display in the bottom to play the game. */
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [props.randomNumber])

    return (<div>
        {
            props.randomNumber.map((randomNumber: RandomNumberModel, index) => {
                return (
                    <React.Fragment key={randomNumber.number + Math.random()}>
                        <Box sx={{
                            padding: 1,
                            width: '100%',
                            textAlign: (index % 2 === 0) ? 'right' : 'left'
                        }}>
                            <Box>
                                {
                                    randomNumber.user === "CPU" ?
                                        <img src={Logo} alt="Logo" className='logo-msg' />
                                        : <AccountCircleIcon sx={{ fontSize: '35px' }} />
                                }
                                <Box sx={{ padding: "0 40px", marginTop: '-40px' }}>
                                    <Box sx={{ ...commonStyles, backgroundColor: (index % 2 === 0) ? '#304b5e' : "rgb(21, 141, 252)", display: 'inline-flex', color: 'white' }}>
                                        <Box sx={{ padding: 2, marginLeft: randomNumber.selectedNumber === 0 ? '5px' : '0px', fontWeight: 700 }}>{randomNumber.selectedNumber > 0 ? "+1" : randomNumber.selectedNumber}</Box>
                                    </Box>
                                    <Box sx={{ margin: 1, padding: 1, marginBottom: '12px' }}><span className='compute'>[({randomNumber.selectedNumber + '+' + randomNumber.number})/3]={randomNumber.number}</span></Box>
                                    <Box sx={{ margin: 1, padding: 1, marginBottom: '12px' }}><span className='compute'>{randomNumber.number}</span></Box>
                                </Box>
                            </Box>
                        </Box>
                    </React.Fragment>
                )
            })
        }
        {((props.socket.id === activateTurn?.user && activateTurn?.state === 'play') || (props.socket.id !== activateTurn?.user && activateTurn?.state === 'wait')) ?
            <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} >
                <Box sx={{ ...commonStyles }} onClick={onClick.bind(this, -1)}><Box sx={{ padding: 2 }}>-1</Box> </Box>
                <Box sx={{ ...commonStyles, marginLeft: '5px' }} onClick={onClick.bind(this, 0)}><Box sx={{ padding: 2 }}>0</Box></Box>
                <Box sx={{ ...commonStyles }} onClick={onClick.bind(this, 1)}><Box sx={{ padding: 2 }}>+1</Box></Box>
            </Box>
            : null}
        <div ref={messagesEndRef} />
    </div >)
}

export default MessangerCard;