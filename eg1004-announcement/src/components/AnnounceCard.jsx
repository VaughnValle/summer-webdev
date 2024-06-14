import React from 'react';

const Card = ({
    title,
    content,
    date,
    time,
}) => {
    return (
        <div className='mx-auto block max-w-5xl p-0 border border-purple rounded-lg'>
            <div className='bg-purple p-2 rounded-lg rounded-b-none'>
                <h5 class='mb-2 text-lg font-normal tracking-tight text-white dark:text-white'>{title}</h5>
            </div>
            <p class='font-normal p-2'>{content}</p>
            <footer className='bg-gray border-t border-grayer p-2'><p><strong>Posted on:</strong> {date} at {time}</p></footer>
        </div>

    )
};

export default Card;
