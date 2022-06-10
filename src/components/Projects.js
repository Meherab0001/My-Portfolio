import React from 'react';
import project1 from '../img/FireShot Capture 001 - Car Manufacturing Web - assignment-12-785e5.web.app.png'
const Projects = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl text-center font-bold text-blue-400'>Projects</h1>
            <img className='object-contain w-96 h-48' src={project1} alt="" />
        </div>
    );
};

export default Projects;