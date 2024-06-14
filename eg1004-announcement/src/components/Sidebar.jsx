import React from 'react';
import Card from './Card.jsx';

const sidebars = [
  {
    'header': 'Course Information',
    'links': [
      'Announcements',
      'Sections',
      'Syllabus/Schedules'
    ]
  },
  {
    'header': 'Employees',
    'links': [
      'Professors',
      'Staff',
      'Teaching Assistants',
      'Writing Professors'
    ]
  },
  {
    'header': 'Help Center',
    'links': [
      'Student Manual',
      'Send Feedback'
    ]
  }
];

const Sidebar = () => {
    return (
        <div className='sticky flex-column text-black mx-auto mr-0'>
        {sidebars.map((item, index) => (
            <Card title={item.header} content={item.links}/>
        ))}
        </div>
    )
};

export default Sidebar;
