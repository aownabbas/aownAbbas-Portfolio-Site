import React from 'react';
import personalInfothumb from '../../assets/img/about/personal-infothumb.png';

const Experience = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === 'experience' ? 'active' : ''} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Experience</h2>
              <p>
                I am a skilled Software Engineer with 5 years of experience in developing dynamic web and mobile
                applications. My expertise spans modern frameworks like React, Next.js, Node.js, and React Native,
                delivering optimized and scalable solutions. Passionate about clean code and innovative problem-solving,
                I strive to create impactful digital experiences.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2020</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Front-end developer</h4>
                    <p className="fz-18 pra d-block">Giisty</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior Front-end developer</h4>
                    <p className="fz-18 pra d-block">Rising Technologies</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2022</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior Front-end developer</h4>
                    <p className="fz-18 pra d-block">Pure Elements Technologies</p>
                  </div>
                </div>

                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2023</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Senior Front-end developer</h4>
                    <p className="fz-18 pra d-block">Pure Elements Technologies</p>
                  </div>
                </div>

                <div className="exri__item">
                  <span className="fz-18 fw-500 base">In 2024</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Full Stack developer(Team Lead)</h4>
                    <p className="fz-18 pra d-block">Bearplex Innovation pvt lmt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
