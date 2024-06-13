import React from 'react';
import AnnounceCard from './AnnounceCard.jsx';


const Main = () => {
    return (
        <>
            <h1>Welcome to General Engineering 1004</h1>
            <AnnounceCard 
                title='Congratulations to our showcase winners!' 
                content='Dear Class. I hope finals are treating you well.'
            />
        </>
    )
};

export default Main;
