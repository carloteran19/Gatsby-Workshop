import React from 'react';
import Layout from '../components/Layout';
import dog from '../images/dog.jpg'; 
import Img from '../components/Img';

export default function HomePage() {
    return (
        <Layout>
            <p>Hey!</p>
            <Img src="dog.jpg" lat="Cut Pup" />
        </Layout>
    );
}