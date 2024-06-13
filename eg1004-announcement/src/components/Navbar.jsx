import React from 'react';

const logo='logo.png';

const Navbar = () => {
    return (
        <nav className='nav bg-purple-700 sticky top-0 z-[20] mx-auto flex w-full items-center justify-between' >
            <img src={logo} alt='EG logo' />
            <button> Sign In </button>
        </nav>
    )
};

export default Navbar;
