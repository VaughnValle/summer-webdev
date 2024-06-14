import React from 'react';
import Card from './Card.jsx';

const Sidebar = () => {
    return (
        <div className='sticky flex-column'>
            <Card title='Course Information' content='Sample'/>
            <Card title='Employees' content='Sample'/>
            <Card title='Help Center' content='Sample'/>
        </div>
    )
};

export default Sidebar;
