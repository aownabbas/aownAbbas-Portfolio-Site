import React from 'react';
import Title from '../Shared/Title/Title';
import WorkProcessCard from './WorkProcessCard';

const processList = [
  {
    id: 1,
    title: 'Concept',
    info: 'Laying the foundation for a successful website & Mobile apps.',
    list: ['Reviewing any existing branding', 'Target audience and competitors research', 'Developing a strategy'],
  },
  {
    id: 2,
    title: 'Design',
    info: 'Crafting a visually appealing and user-friendly interface.',
    list: ['Developing wireframes and mockups', 'Choosing typography and color palettes', 'Refining the design'],
  },
  {
    id: 3,
    title: 'Development',
    info: 'Bringing the design to life with functionality and responsiveness.',
    list: [
      'Building and integrating the website using modern tools',
      'Adding animations and interactive elements',
      'Testing functionality and ensuring responsiveness',
    ],
  },
];

const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title mainTitle="Your Dream Website In Just Few Steps" sortTitle="Working Process" />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
