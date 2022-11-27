import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Footer = () => {

    const [value, setValue] = React.useState(0);

    return (
        <>
            <footer>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="20vh">
                        <Typography>
                            Copyright @ 2022
                        </Typography>
                    </Box>
                </Paper>
            </footer>
        </>
    )
}
export default Footer;