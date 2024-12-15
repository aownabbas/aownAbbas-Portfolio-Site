import React from 'react';
import loader from '../../../assets/img/logo/loader.png';

const Preloader = () => {
  return (
    <div className="preloader__matias">
      <div className="box text-center">
        <div className="matias mb-10">
          <img src={loader} alt="img" />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">Lobelare</span>
      </div>
    </div>
  );
};

export default Preloader;
