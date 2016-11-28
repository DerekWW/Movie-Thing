import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Footer = React.createClass({
  render(){
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <h3>Footer</h3>
      </MuiThemeProvider>
    );
  }
});

export default Footer;
