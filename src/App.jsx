import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';

import Tale from './pages/Tale';
import Translation from './pages/Translation';
import Gallery from './pages/Gallery';
import Aboutus from './pages/Aboutus';
import References from './pages/References';
import Phad from './pages/Phad';

import Chatbot from './pages/Chatbot';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/tale" element={<Tale />} />
        <Route path="/Translation" element={<Translation />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Phad" element={<Phad />} />
        <Route path="/AboutUs" element={<Aboutus />} />
        <Route path="/References" element={<References />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        
      </Routes>
    </>
  );
}

export default App;
