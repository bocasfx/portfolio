import React from 'react';
import './Profile.css';
import colors from '../utils/colors.js';

class Profile extends React.Component {
  render() {

    let color = colors[Math.floor(Math.random() * colors.length)];
    let profileClass = 'profile-linkedin hover-' + color;

    return (
      <div className="profile-container animated fadeIn">
        <a className={profileClass} href="https://www.linkedin.com/in/rodolfopalacios" target="_blank">
          <div>
            <img src="/img/profile.png" className="profile-image" alt="Profile"/>
          </div>
          <div className="profile-name">Rodolfo Palacios</div>
          <div className="profile-title">Software Developer</div>
        </a>
      </div>
    );
  }
}

module.exports = Profile;
