import React from 'react';
import Layout from './Layout/Layout';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const About = () => {
    return (
        <>
        <Layout>
            <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">
                <Card  sx={{ display: 'inline-block', m: 4, color: 'primay.light'}}>
                    <CardContent>
                        <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sollicitudin laoreet. Etiam tincidunt enim in nibh accumsan, eget cursus orci ullamcorper. Nulla ac velit ac mi efficitur fermentum. Mauris tincidunt scelerisque sem, vel mollis tortor. Suspendisse tempor, enim et porttitor maximus, nisi ante tristique eros, vitae tempor ipsum mi id tortor. Praesent pretium sapien id tincidunt suscipit. Nam at turpis tincidunt, blandit dui eu, vulputate enim. Sed quis nisi mauris. Maecenas in lorem augue. Aliquam ac venenatis orci. Sed laoreet eget dui at imperdiet. Quisque faucibus lorem sit amet eros convallis, vel euismod tortor consequat. Cras euismod ligula non ultrices sagittis.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Layout>
        </>
    )
}
export default About;