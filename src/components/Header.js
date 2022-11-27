import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const Header = () => {

    
    return (
        <>  
        <Box>
       
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        
                        My React App 
                    </IconButton>

                    <List style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                        <ListItem>
                            <Link style={{color:"#fff"}} size="small" to="/"> HOME </Link> 
                        </ListItem>
                        <ListItem>
                            <Link style={{color:"#fff"}} size="small" to="/about"> ABOUT </Link> 
                        </ListItem>
                    </List>
                    
                    <Typography color="inherit" variant="body2"  sx={{ flexGrow: 1 }}>
                        
                        
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                
            </AppBar>
            
        </Box>
        </>
    )
}

export default Header;