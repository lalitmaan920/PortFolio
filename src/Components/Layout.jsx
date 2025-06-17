import React from 'react';
import './Portfolio.css';

const PortfolioFront = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center p-4 text-center text-md-start">
          <h1 className="mb-3">Hi, I'm <span className="text-primary">Lalit Kumar</span></h1>
          <p className="mb-4">
            Hi! I'm a Full Stack Web Developer passionate about creating
              user-friendly and scalable web applications
          </p>
          <div className="mb-4 d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
            <a href="mailto:lalitmaan2004@gmail.com" className="btn btn-primary">Hire Me</a>
            <a href="/LalitKumarCV.pdf" className="btn btn-outline-secondary" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
          <div className="d-flex justify-content-center justify-content-md-start gap-3">
            <a href="https://www.linkedin.com/in/lalit-maan-a133a42b9" className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">LinkDin</a>
            <a href="https://github.com/Lalitmaan920" className="btn btn-outline-info" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <img src="Lalit.png" alt="Profile" className="img-fluid rounded-circle shadow-lg" style={{ maxHeight: '400px', width: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioFront;
