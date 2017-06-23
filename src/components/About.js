import React from 'react';
import './About.css';
import { connect } from 'react-redux';

class About extends React.Component {

  render() {
    let linkClass = this.props.color;
    let decoratorStyle = {
      borderTopColor: this.props.color
    };
    return (
      <div className="transition1s about-container animated fadeIn">
        <a href="https://www.linkedin.com/in/rodolfopalacios" target="_blank" className={linkClass}>
          <img src="/img/profile.png" className="about-image" alt="about"/>
          <div className="about-name-container">
            <div className="transition2 about-name-decorator" style={decoratorStyle}></div>
            <div className="transition2 about-name">Rodolfo Palacios</div>
          </div>
          <div className="about-title">Software Developer</div>
        </a>
        <div className="about-description">Software Developer with 10+ years experience in software development, web application development and user interface design. Proven success working in a wide variety of projects both independently and in a team environment. I have a passion for innovation and originality, and an obsession with detail and quality. Self motivated and thorough in my approach.</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.navigation.color
  };
};

module.exports = connect(mapStateToProps)(About);
