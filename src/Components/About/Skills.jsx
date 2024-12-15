import React from 'react';
import personalInfothumb from '../../assets/img/about/personal-infothumb.png';
import figma from '../../assets/img/about/react-icon.png';
import word from '../../assets/img/about/word.png';
import html from '../../assets/img/about/html.png';
import boot from '../../assets/img/about/boot.png';
import nextjs from '../../assets/img/about/nextjs.jpg';
import Typescript from '../../assets/img/about/typescript.png';
import react_native from '../../assets/img/about/react-native.jpg';

const skillsList = [
  {
    id: 1,
    skill: 'React',
    percentage: '100%',
    image: figma,
  },
  {
    id: 4,
    skill: 'Nextjs',
    percentage: '99%',
    image: nextjs,
  },
  {
    id: 2,
    skill: 'Typescript',
    percentage: '98%',
    image: Typescript,
  },
  {
    id: 3,
    skill: 'HTML',
    percentage: '98%',
    image: html,
  },
  {
    id: 3,
    skill: 'React Native',
    percentage: '100%',
    image: react_native,
  },
  {
    id: 4,
    skill: 'Bootstrap',
    percentage: '97%',
    image: boot,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === 'skills' ? 'active' : ''} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Our Tech Stacks</h2>
              <p>
                We leverage cutting-edge technologies to build robust and scalable solutions. From modern frameworks
                like React, Next.js, and Node.js to mobile platforms like React Native, our expertise ensures seamless
                development across web and mobile applications.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} style={{ borderRadius: '50px' }} width={100} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
