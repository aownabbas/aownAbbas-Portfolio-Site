import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router.jsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stars from './Layouts/AnimatedBackground.jsx';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Stars />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
