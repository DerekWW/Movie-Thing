import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FlatButton from 'material-ui/FlatButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
  toolbarStyle: {
    backgroundColor: grey900,
    alignItems: 'center',
  },
  titleStyle: {
    color: grey200,
    fontSize: 28,
    textDecoration: 'none',
    fontFamily: 'Limelight',
  },
  linksStyle: {
    color: grey200,
    fontSize: 14,
    textDecoration: 'none',
    fontFamily: 'Limelight',
  },
  textStyle: {
    textAlign: 'right',
    verticalAlign: 'center',
  }
};

const Header = React.createClass({
  getInitialState(){
    return {
      value: 1
    };
  },

  handleChange(event, index, value){
    this.setState({value});
  },

  handleLogout(){
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

    if(isLoggedIn) {
      button = <FlatButton
        label="Logout"
        style={styles.linksStyle}
        onClick={this.handleLogout}
      />

      friendsLink =  <Link to='/friends' style={styles.linksStyle}> Find Friends </Link>
      moviesLink =   <Link to='/moviesearch' style={styles.linksStyle}>Search Movies </Link>

    }

    return (
      <div className="row" style={styles.pageStyle}>
      <Toolbar style={styles.toolbarStyle}>
          <div className="four columns">
          <Link to='/home' style={styles.titleStyle}>Movie Thing </Link>
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
