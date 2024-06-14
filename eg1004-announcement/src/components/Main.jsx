import React from 'react';
import AnnounceCard from './AnnounceCard.jsx';


const Main = () => {
    return (
        <>
            <h1 className='text-2xl'>Welcome to General Engineering 1004</h1>
            <AnnounceCard 
                title='Congratulations to our showcase winners!' 
                content='Dear Class. I hope finals are treating you well.'
                date='May 13, 2024'
                time='10:51 AM'
            />
        </>
    )
};

export default Main;
