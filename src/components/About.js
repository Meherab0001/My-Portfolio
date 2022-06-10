import React from 'react';
import img from '../reusme/FB_IMG_16408773100019239 (2).jpg'
const About = () => {
    return (
        <div className='grid sm:grid-flow-col lg:grid-cols-2 justify-center items-center ml-12 gap-10'>
            <div>
                <h1 className='text-2xl font-bold text-yellow-400'>Hi I'm Meherab Hossain ,</h1>
                <p className='text-green-300'>Junior MERN developer</p>
                <p>A Mern stack developer is expected to develop JavaScript applications through the use of Node. js , React. js, Express, and Mongo DB. The companies looking for a Mern stack developer expects that I can design multiple layers of applications when working cross-functionally over various infrastructures.</p>
            </div>
            <div>
            <img class="mask mask-circle h-48 w-48" src={img} alt='meherab' />
            </div>
        </div>
    );
};

export default About;