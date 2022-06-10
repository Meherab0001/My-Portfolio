import React from 'react';

const Contact = () => {
    return (
       <div>
            <div>
            <h1 className='text-3xl font-bold text-center text-info'>Contact Me</h1>
            <div className='grid gap-5 justify-center my-5'>
            <input type="text" placeholder="Name" class="input input-bordered input-secondary w-full max-w-xs" />
            <input type="email" placeholder="Email" class="input input-bordered input-secondary w-full max-w-xs" />
            <textarea class="textarea textarea-primary" placeholder="Your message"></textarea>
            <input type="submit"  className="btn btn-secondary w-full max-w-xs" value="Send" />
            </div>
        </div>
        <div>
            
        </div>
       </div>
    );
};

export default Contact;