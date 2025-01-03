import React, { useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Globe, Instagram } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import personalInfoThumb from '../../assets/img/about/personal-infothumb.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const contactInfo = [
  {
    id: 1,
    system: 'Email',
    contact: 'mmaoun344@gmail.com',
  },
  {
    id: 2,
    system: 'Phone',
    contact: '+(92)3015754034',
  },
  {
    id: 3,
    system: 'Address',
    contact: 'Muzaffar Garh, Pakistan,',
  },
  {
    id: 4,
    system: 'Follow',
    socalContact: [<Facebook />, <Twitter />, <Linkedin />, <Globe />, <Instagram />],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === 'about' ? 'active' : ''} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb" data-aos="zoom-in" data-aos-duration="500">
              <img src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2 className="h2-head" data-aos="fade-up" data-aos-duration="500">
                Personal Info
              </h2>
              <p className="p-descrip" data-aos="fade-up" data-aos-duration="500">
                My name is Muhammad Aown Abbas, a dedicated Software Engineer from Muzaffar Garh, Punjab. With 5 years
                of experience in web and mobile app development, I specialize in creating efficient, scalable, and
                user-focused digital solutions. Passionate about leveraging modern technologies, I thrive on solving
                complex problems and delivering impactful results.
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">{system}</span>
                            <Link to={''}>{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-2 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={''}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
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

export default AboutMe;
