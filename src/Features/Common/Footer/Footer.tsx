
import * as React from 'react';
import Box from '@mui/material/Box';
import FooterLogo from '../../../footer-logo.png'; // to mach footer like mockup footer is completely image.

const Footer = () => {
    return (
        <Box sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            backgroundColor: '#0a3847',
        }}>
            <img src={FooterLogo} alt="Logo" className='footer-img' />
        </Box>
    );
}
export default Footer;