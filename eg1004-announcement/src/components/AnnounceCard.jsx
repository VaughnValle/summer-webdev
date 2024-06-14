import React from 'react';

const Card = ({
    title,
    content,
    date,
    time,
}) => {
    return (
        <div className='mx-auto block max-w-5xl p-0 border border-purple rounded-md'>
            <div className='bg-purple p-4 py-2 pb-1 rounded-md rounded-b-none'>
                <h5 class='mb-2 text-lg font-light tracking-tight text-black dark:text-white'>{title}</h5>
            </div>
            <p class='font-light p-4 leading-10'>{content}</p>
            <footer className='bg-gray border-t border-grayer p-4'><p><strong>Posted on:</strong> {date} at {time}</p></footer>
        </div>

    )
};

export default Card;
