import React from 'react';

import Layout from './Components/Layout';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contect from './Components/Contect';

function App() {
  return (
    <>
 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Layout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contect" element={<Contect/>}/>
        </Routes>
      </Router>
   </>

  );
}

export default App;