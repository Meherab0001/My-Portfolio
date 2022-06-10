import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../img/FireShot Capture 001 - Car Manufacturing Web - assignment-12-785e5.web.app.png'
const Projects = () => {
    return (
        <div className='my-12 ml-4'>
            <h1 className='text-3xl text-center font-bold text-blue-400'>Projects</h1>
            <div>
                <h2 className='text-xl font-bold'>Car Tools Manufacturing </h2>
               <div className='flex gap-5 text-blue-400'>
               <Link to='https://assignment-12-785e5.web.app/'>Live </Link>
                <Link to='https://github.com/Meherab0001/-Manufacturer-website-client-side-assignment-12'>Client code</Link>
                <Link to='https://github.com/Meherab0001/assingnemnt-12-sever'>Server code</Link>
               </div>
                <img className='object-cover w-96 h-48 mt-3' src={project1} alt="" />
                <div>
                    <h1 className="text-2xl">Features</h1>
                    <p>
                        <li>Customers can purchase tools,Customers can pay with stripe methods ,Customers can review tools  .
                        </li>
                        <li>Admin can change the tools status,Admin can add tools and also delete unpaid orders</li>
                        <li>Admin can add admin in normal user and also admin have extra dashboard</li>
                        
                    </p>
                </div>
                <h1 className="text-xl">Technology Used:</h1>
               
                <div className='flex gap-3'>
                    <p>React Js</p>
                    <p>Epress</p>
                    <p>Node Js</p>
                    <p>MongoDB</p>
                    <p>Firebase </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;