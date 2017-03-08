import React from 'react';
import './Navigation.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {

    let navigationClass = 'background-' + this.props.color.color + ' navigation-home animated fadeIn';

    return (
      <div>
        <div className="navigation-container">
          <Link to="/" className={navigationClass}>
          </Link>
          <div className="navigation-prev-next">
            <Link to="/project/0">
              <div className="navigation-prev">&lt; Prev</div>
            </Link>
            <Link to="/project/1">
              <div className="navigation-next">Next &gt;</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return { color: state.navigation };
};

export default connect(mapStatetoProps)(Navigation);

