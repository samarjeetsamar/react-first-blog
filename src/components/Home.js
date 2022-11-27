import React from 'react';
import Layout from './Layout/Layout';
import PostListing from '../modules/Post/PostListing';

const Home = () => {
    return (
        <>
        <Layout>
            <PostListing />
        </Layout>
        </>
    )
}
export default Home;