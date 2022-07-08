import React from 'react';
import project1 from '../img/FireShot Capture 001 - Car Manufacturing Web - assignment-12-785e5.web.app.png'
import project2 from '../img/FireShot Capture 003 - Books Shop - wonderful-kelpie-ae179f.netlify.app.png'
import project3 from '../img/FireShot Capture 004 - LawYer - assignment-10-dce5b.web.app.png'
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3'>

            <div className='my-12 ml-4'>

                <div>
                    <h2 className='text-xl font-bold'>Car hrefols Manufacturing </h2>
                    <div className='flex gap-5  my-5 text-blue-400'>

                        <a href='https://assignment-12-785e5.web.app/'>Live </a>
                        <a href='https://github.com/Meherab0001/-Manufacturer-website-client-side-assignment-12'>Client code</a>
                        <a href='https://github.com/Meherab0001/assingnemnt-12-sever'>Server code</a>
                    </div>
                    <img className='w-48 h-96 object-fill mt-3' src={project1} alt="" />
                    <div>
                        <h1 className="text-2xl">Features</h1>
                        <p>
                            <li>Customers can purchase hrefols,Customers can pay with stripe methods ,Customers can review hrefols  .
                            </li>
                            <li>Admin can change the hrefols status,Admin can add hrefols and also delete unpaid orders</li>
                            <li>Admin can add admin in normal user and also admin have extra dashboard</li>

                        </p>
                    </div>
                    <h1 className="text-xl">Technology Used:</h1>

                    <div className='flex gap-3 text-amber-400'>
                        <p>React Js,</p>
                        <p>Epress,</p>
                        <p>Node Js,</p>
                        <p>MongoDB,</p>
                        <p>Firebase </p>
                    </div>
                </div>
            </div>
            <div className='my-12 ml-4'>

                <div>
                    <h2 className='text-xl font-bold'>Lucky One </h2>
                    <div className='flex gap-5  my-5 text-blue-400'>

                        <a href='https://wonderful-kelpie-ae179f.netlify.app/'>Live </a>
                        <a href='https://github.com/Meherab0001/lucky-one-assignment-8'>Github code</a>

                    </div>
                    <img className='w-48 h-96 object-fill mt-3' src={project2} alt="" />
                    <div>
                        <h1 className="text-2xl">Features</h1>
                        <p>
                            <li>Users can select 4 books . to read one book randomly selected.</li>
                            <li> A user only one book select for one time and cannot select more then
                                4 book</li>
                        </p>
                    </div>
                    <h1 className="text-xl">Technology Used:</h1>

                    <div className='flex gap-3 text-amber-400'>
                    <p>React Js,</p> 
                    <p>Javascript,</p>
                    <p>CSS.</p>
                    </div>
                </div>
            </div>
            <div className='my-12 ml-4'>

                <div>
                    <h2 className='text-xl font-bold'>Detective Lawyer </h2>
                    <div className='flex gap-5 my-5 text-blue-400'>

                        <a href='https://assignment-10-dce5b.web.app/home'>Live </a>
                        <a href='https://github.com/Meherab0001/indepented--service-provider-assignment-10'>Github code</a>
                        
                    </div>
                    <img className=' mt-3' src={project3} alt="" />
                    <div>
                        <h1 className="text-2xl">Features</h1>
                        <p>
                            <li>Users can create an account and login by email and password.</li>
                            <li> When .a user click on Purchase button must have login account otherwise login or sign up</li>
                            
                            <li>Even a user also login with a github or gmail account.</li>

                        </p>
                    </div>
                    <h1 className="text-xl">Technology Used:</h1>

                    <div className='flex gap-3 text-amber-400'>
                    <p>React.js,</p>
                    <p> Private route,</p> 
                    <p>Firebase Authentication,</p>
                    <p> Flowbite.</p>
                    </div>
                </div>
            </div>
            <Link to='project'><h3 className="text-xl text-center text-primary btn">See more </h3></Link>
        </div>
    );
};

export default Projects;