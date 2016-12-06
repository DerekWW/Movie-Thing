/* eslint-disable no-console */

import { grey200, grey900 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import React from 'react';
import { Toolbar } from 'material-ui/Toolbar';
import axios from 'axios';

/* eslint-disable new-cap*/

const styles = {
  pageStyle: {
    backgroundColor: '#0D5813',
    fontFamily: 'Source Sans Pro'
  },
  toolbarStyle: {
    backgroundColor: '#0D5813',
    alignItems: 'center',
  },
  titleStyle: {
    color: grey200,
    fontSize: 18,
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro'
  },
  linksStyle: {
    color: grey200,
    fontSize: 14,
    textDecoration: 'none',
    fontFamily: 'Source Sans Pro'
  },
  textStyle: {
    textAlign: 'right',
    verticalAlign: 'center',
  }
};

const Header = React.createClass({
  getInitialState() {
    return {
      value: 1
    };
  },

  handleChange(event, index, value) {
    this.setState({ value });
  },

  handleLogout() {
    axios.delete('/api/token')
      .then(() => {
        this.props.checkIsLoggedIn();
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    let button = null;
    let friendsLink = null;
    let moviesLink = null;

    if (isLoggedIn) {
      button = <FlatButton
        label="Logout"
        onClick={this.handleLogout}
        style={styles.linksStyle}
      />;

      friendsLink =
        <Link
          style={styles.linksStyle}
          to="/friends"
        > Find Friends
      </Link>;
      moviesLink =
        <Link
          style={styles.linksStyle}
          to="/moviesearch"
        >Search Movies
      </Link>;
    }

    return (
      <div className="row" style={styles.pageStyle}>
        <Toolbar style={styles.toolbarStyle}>
          <div className="four columns">
            <Link style={styles.titleStyle} to="/home">MOVIE THING</Link>
          </div>
          <div className="three columns" style={styles.textStyle}>
            {friendsLink}
          </div>
          <div className="three columns" style={styles.textStyle}>
            {moviesLink}
          </div>
          <div className="three columns" style={styles.textStyle}>
            {button}
          </div>
        </Toolbar>
      </div>
    );
  }
});

export default Header;
