import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Links.css';

const Links: React.FC = () => {
  return (
    <div className="links-container">
      <div className="link-item">
        <a href="https://github.com/augustlevinson">
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <p className='link-text'>GitHub</p>
        </a>
      </div>
      <div className="link-item">
        <a href="https://www.linkedin.com/in/augustlevinson/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <p className='link-text'>LinkedIn</p>
        </a>
      </div>
      <div className="link-item">
        <a href="mailto:augustlevinson@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
          <p className='link-text'>E-mail</p>
        </a>
      </div>
    </div>
  );
};

export default Links;