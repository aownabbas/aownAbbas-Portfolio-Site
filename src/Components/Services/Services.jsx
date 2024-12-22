import React from 'react';
import Service from './Service';
import Title from '../Shared/Title/Title';

const serviceList = [
  {
    id: '02',
    heading: 'Website Designer',
    subHeading: 'Designer',
    para: 'I am a senior website designer too with 5+ years of experience in development and design using ReactJS, NextJS, and TypeScript. I can design from simple to complicated using html,css,Tailwind Css, and designing libraries like material ui or with ant deign.',
  },
  {
    id: '01',
    heading: 'Website Developer',
    subHeading: 'Developer',
    para: 'I am a senior website developer with 5+ years of experience in development and design using ReactJS, NextJS, and TypeScript and Nodsjs. I have completed 15+ projects, including integrations with multiple third-party services and REST APIs.',
  },
  {
    id: '02',
    heading: 'Mobile Apps Developer',
    subHeading: 'React Native Developer',
    para: 'I am a senior mobile app developer with 5+ years of experience in designing and developing Android and iOS applications using React Native. I have completed more than 10 apps, including integrations with multiple third-party services and REST APIs.',
  },
  
];
const Services = ({ isHeading }) => {
  return (
    <section id="services" className={`service__section overhid ${isHeading && 'pt-120'}  pb-120`}>
      <div className="container">
        {isHeading && (
          <Title mainTitle="My Special Service For Your Business Development" sortTitle="Services That i Provide" />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service key={id} id={id} heading={heading} subHeading={subHeading} para={para} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
