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
                <h5 class='mb-2 text-lg font-normal tracking-tight text-white dark:text-white'>{title}</h5>
            </div>
            <p class='font-normal p-2'>{content}</p>
        </div>

    )
};

export default Card;
