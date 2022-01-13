import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

function Profile(props) {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://github.com/voboghure-dev'>
                <i className='fab fa-github-square share'></i>
              </a>
              <a href='https://twitter.com/voboghure_dev'>
                <i className='fab fa-twitter-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/tapankumerdas'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://www.instagram.com/voboghure.dev/'>
                <i className='fab fa-instagram-square'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {' '}
              Hello, I'm <span className='highlighted-text'>Tapan</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  steps={[
                    'Enthusiastic Dev 😍',
                    1000,
                    'Full Stack Developer 👨🏻‍💻',
                    1000,
                    'LAMP Stack Dev',
                    1000,
                    'React Dev',
                    1000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                I am building infrastructure for creative web application.
                Focused on great performance and deliver the best results as
                daily basis.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'> Hire Me </button>
            <a href='Tapan.pdf' download='Tapan.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
