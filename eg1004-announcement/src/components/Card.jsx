import React from 'react';

const Card = ({
    title,
    content,
}) => {
    return (
        <div className='block mx-auto mb-5 max-w-sm p-0 bg-white border border-purple rounded-md'>
            <div className='bg-purple p-4 pl-2 py-1 pb-0 rounded-md rounded-b-none'>
                <h5 class='mb-2 text-lg font-thin tracking-tight text-black dark:text-white'>{title}</h5>
            </div>
            <ul className=''>
                {content.map((link, index) => (
                    index === content.length - 1 ?
                    <li className='text-blackish px-3 py-1 pt-1 hover:bg-gray cursor-pointer'>{link}</li>
                    
                    :
                    <li className='text-blackish border-b border-grayer px-3 py-1 pt-0 hover:bg-gray cursor-pointer'>{link}</li>
                ))}
            </ul>

        </div>

    )
};

export default Card;
