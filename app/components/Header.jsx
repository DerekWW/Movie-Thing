import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
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

  render() {
    return (
      <div className="row" style={styles.pageStyle}>
      <Toolbar style={styles.toolbarStyle}>
          <div className="six columns">
          <Link to='/' style={styles.titleStyle}>Movie Thing </Link>
          </div>
          <div className="two columns offset-by-five" style={styles.textStyle}>
          <Link to='/friends' style={styles.linksStyle}> Find Friends </Link>
          </div>
          <div className="two columns" style={styles.textStyle}>
          <Link to='/moviesearch' style={styles.linksStyle}>Find Movies </Link>
          </div>
      </Toolbar>
    </div>
    );
  }
});

export default Header;
