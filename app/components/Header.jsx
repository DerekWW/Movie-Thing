import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import { black, grey100, grey800, grey900 } from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  toolbarStyle: {
    backgroundColor: grey900,
  },
  titleStyle: {
    color: grey100,
    fontSize: 20,
    textDecoration: 'none',
  },
  linksStyle: {
    color: grey100,
    fontSize: 14,
    textDecoration: 'none',
  },
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
      <div className="row">
      <Toolbar style={styles.toolbarStyle}>
          <div className="six columns">
          <Link to='/' style={styles.titleStyle}>Movie Thing </Link>
          </div>
          <div className="three columns">
          <Link to='/friends' style={styles.linksStyle}> Find Friends </Link>
          </div>
          <div className="three columns">
          <Link to='/moviesearch' style={styles.linksStyle}>Find Movies </Link>
          </div>
          {/* <ToolbarGroup firstChild={true}>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}>
              <MenuItem value={1} primaryText="SignUp" className="dropdown-menu"/>
              <MenuItem value={2} primaryText="LogIn" className="dropdown-menu"/>
            </DropDownMenu>
          </ToolbarGroup> */}
      </Toolbar>
    </div>
    );
  }
});

export default Header;
