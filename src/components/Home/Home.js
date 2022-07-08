import React from 'react';
import Banner from '../Banner';
import Contact from '../Contact';
import Projects from '../Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-3xl text-center my-12 font-bold text-blue-400'>Projects</h1>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;