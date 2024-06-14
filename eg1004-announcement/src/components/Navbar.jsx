import React from 'react';
const logo='logo.png';

const Navbar = () => {
    return (
        <nav className='nav bg-purple sticky top-0 z-[20] mx-auto flex w-full items-center justify-between p-1' >
            <img src={logo} alt='EG logo' className='h-12 mx-auto'/>
            <button className= 'border border-white rounded-md text-white p-1 px-4 mx-auto'> Sign In </button>
        </nav>
    )
};

export default Navbar;
