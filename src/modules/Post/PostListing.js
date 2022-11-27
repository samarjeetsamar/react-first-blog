import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

import {getPosts, deletePost} from '../../utils/Apis/post_API';

const PostListing = (props) => {

    const [posts, setPosts] = useState([]);
    const [loader, setLoader] = useState(true);
    const [alertContent, setAlertContent] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [severnity, setSevernity] = useState('info');

    const [show, setShow] = useState(true);
    
    useEffect(() => {
        getPosts().then(res => {
            setLoader(false);
            const resData = res.data;
            if(resData)
            {
               setPosts(resData);
            }
           
        }).catch(err => {
            const error = err.response;
            console.log('error', error);
        });
    }, [getPosts]);

    const deleteItem = (id) => {
        deletePost(id).then(res=>{
            if(res.status == 200){
                setAlertContent('Post has been deleted');
                setSevernity('success');
                setOpenSnackbar(true);  
                setShow(false);
            }
        }).catch(err =>{
            setAlertContent('Something went wrong!');
            setSevernity('warning');
            setOpenSnackbar(true);  
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };
    

    return (
        <>
            <h1 align="center">Latest posts</h1>
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" minHeight="100vh">
                {loader ? (<CircularProgress />) : null}
                {posts && posts.slice(0, 11).map((item, index) => (

                
                <Card key={index} sx={{
                    display: 'inline-block',
                    m: 2,
                    width: 350,
                    height: 300,
                    color: 'primay.light',
                    '&:hover': {
                      backgroundColor: 'primary.secondary',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}>
                    <CardContent>
                        <Typography variant="h5" color="text.secondary" gutterBottom>
                            {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                        </Typography>
                        <Typography variant="p"  component="div">
                            {item.body} 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="button" backgroundColor="#fff" sx={{color:'#fff', backgroundColor: '#202020'}} size="small" onClick={() => deleteItem(item.id)}>Delete</Button>
                        <Button variant="button" sx={{color:'#fff', backgroundColor: '#202020'}} size="small" >Read</Button>
                        <Link to={'/posts/'+item.id}> Read more </Link>
                    </CardActions>
                </Card> 
                ))}
            </Box>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
                vertical: 'top', horizontal: 'right'}}>
                <Alert onClose={handleClose} severity={severnity} sx={{ width: '100%' }}>
                    {alertContent}
                </Alert>
            </Snackbar>
        </>
    )
}

export default PostListing;