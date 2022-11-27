import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Layout from '../../components/Layout/Layout';
import {getPostItem} from '../../utils/Apis/post_API';
import { Typography } from '@mui/material';

const Post = () => { 
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        getPostItem(postId).then(res => {
            setPost(res.data);
        }).catch(err => {
            const error = err.response;
            console.log('error', error);
        });
    }, [getPostItem]);

    return (
        <>
            <Layout>
                <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                    <Card  sx={{ display: 'inline-block', m: 4, color: 'primay.light'}}>
                        <CardContent>
                            <Typography variant="h3">
                                {post && post.title}
                            </Typography>
                            <Typography variant="body2">
                                {post && post.body}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Layout> 
        </>
    )
}

export default Post;