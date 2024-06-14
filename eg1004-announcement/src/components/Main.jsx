import React from 'react';
import AnnounceCard from './AnnounceCard.jsx';


const Main = () => {
    return (
        <div className='mx-auto w-9/12 flex-column flex-auto items-center justify-center'>
            
            <h1 className='text-2xl mx-auto ontent-center'>Welcome to General Engineering 1004</h1>
            <AnnounceCard 
                title='Congratulations to our showcase winners!' 
                content='Dear Class. I hope finals are treating you well.'
                date='May 13, 2024'
                time='10:51 AM'
                className='mx-auto'
            />
        </div>
    )
};

export default Main;
