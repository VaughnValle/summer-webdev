import React from 'react';

const Card = ({
    title,
    content,
    date,
    time,
}) => {
    return (
        <div className='block mx-auto max-w-sm p-0 bg-white border border-purple rounded-lg'>
            <div className='bg-purple p-2 rounded-lg rounded-b-none'>
                <h5 class='mb-2 text-lg font-normal tracking-tight text-white dark:text-white'>{title}</h5>
            </div>
            <p class='font-normal p-2'>{content}</p>
        </div>

    )
};

export default Card;
