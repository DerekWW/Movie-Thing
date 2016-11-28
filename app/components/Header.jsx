import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


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
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Movies & Stuff" />
          <ToolbarGroup firstChild={true}>
            <DropDownMenu
              value={this.state.value}
              onChange={this.handleChange}>
              <MenuItem value={1} primaryText="SignUp" className="dropdown-menu"/>
              <MenuItem value={2} primaryText="LogIn" className="dropdown-menu"/>
            </DropDownMenu>
          </ToolbarGroup>
          <FontIcon className="muidocs-icon-custom-sort" />
        </ToolbarGroup>
      </Toolbar>
      </MuiThemeProvider>
    );
  }
});

export default Header;
