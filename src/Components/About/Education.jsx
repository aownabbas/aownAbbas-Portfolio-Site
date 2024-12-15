import React from 'react';
import personalInfothumb from '../../assets/img/about/personal-infothumb.png';

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === 'education' ? 'active' : ''} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>My Education</h2>
              <p>
                I am Muhammad Aown Abbas, a passionate Software Engineer from Muzaffar Garh, Punjab. With an excellent
                academic record and a strong foundation in pre-engineering, I graduated with a stellar CGPA in Software
                Engineering. Combining technical expertise with a problem-solving mindset, I deliver innovative
                solutions in web and mobile app development.
              </p>
              <div className="exprience__box mt-30">
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2013-2015</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Fsc Pre-Engineering</h4>
                    <p className="fz-18 pra d-block">Superior Science Accademy</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2016-2020</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">BSCS</h4>
                    <p className="fz-18 pra d-block">Qarshi Universty Lahore</p>
                  </div>
                </div>
                <div className="exri__item">
                  <span className="fz-18 fw-500 base">2021</span>
                  <div className="expri__cont">
                    <h4 className="mb-15 text-white">Cyber Security</h4>
                    <p className="fz-18 pra d-block">Punjab Universty Lahore</p>
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

export default Education;
