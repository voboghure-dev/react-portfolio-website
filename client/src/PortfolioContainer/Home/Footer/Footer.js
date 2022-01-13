import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img
          src={require('../../../assets/Home/shape-bg.png')}
          alt='share bg'
        />
      </div>
    </div>
  );
}

export default Footer;
