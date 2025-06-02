import React from 'react';
import './AboutUsOurPartners.css';
import img from '../aboutus/Rectangle 1392.png';
import image from '../aboutus/11 1.png';

const AboutUsOurPartners = () => {
  return (
    <div className="alliances-container">
      <div className="alliances-content">
        <div className="header">
          <h2 className="title">Our Alliances</h2>
        </div>

        <div className="main-content">
          <div className="text-section">
            <h1 className="main-heading">
              Harnessing the power of collaboration to{' '}
              <span className="highlight">navigate global challenges.</span>
            </h1>

            <div className="description">
              <p>
                At Technowgreen Solutions Pte. Ltd. (TSPL), partnerships drive innovation and excellence. 
                A key collaboration is with <strong>Ark Sustainable Technologies Pte. Ltd. (ASTPL)</strong>, 
                a subsidiary of <strong>Ark Marine Consultancy Pte. Ltd., Singapore</strong>. Since its 
                inception in 2016 by Mr. Avinash Kadam, Ark Marine Consultancy has become a global leader, 
                serving over 100 clients and 560 vessels across 142 ports in 90 countries. Their expertise 
                spans vessel audits, turnkey project management, business consultancy, and cutting-edge 
                maritime technology solutions.
              </p>
              <p>
                From vessel audits and inspections to turnkey project management, business consultancy, 
                and innovative technology solutions, ARK Marine ensures safe, efficient, and environmentally 
                friendly operations. With an unwavering commitment to excellence, we are fast becoming a 
                recognized brand, helping clients achieve their business goals sustainably and effectively.
              </p>
            </div>
          </div>

          <div className="image-section">
            <img src={image} alt="iMAGE" className="top-image" />
          </div>

          
        </div>

        <div className="bottom-image-container">
          <img src={img} alt="Img" className="bottom-image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsOurPartners;
