import React from 'react';

const Card = ({
    title,
    content,
    date,
    time,
}) => {
    return (
        <div className='block max-w-sm p-0 bg-white border border-purple rounded-lg shadow'>
            <div className='bg-purple p-2'>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-white dark:text-white'>{title}</h5>
            </div>
            <p class='font-normal p-2'>{content}</p>
            <footer className='bg-gray border-t border-grayer p-2'><p>Posted on: {date} at {time}</p></footer>
        </div>

    )
};

export default Card;
