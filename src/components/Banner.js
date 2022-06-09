import React from 'react';
import img from '../reusme/FB_IMG_16408773100019239 (2).jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img class="mask mask-decagon h-48 w-48" src={img} />
                <div>
                    <h1 class="text-5xl font-bold">Hi,I'm <span className='uppercase text-orange-400 font-bold'>meherab hossain</span></h1>
                    <p class="py-6">I'm Junior MERN   stack developer.</p>
                    <div >
                        <button class="btn btn-success">Hire Me</button>
                        <button class="btn ml-3 btn-primary">
                            <a href="../reusme/MeherabHossain Resume (3).pdf" download>
                                Download Resume
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;