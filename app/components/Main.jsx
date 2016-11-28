import React from 'react';
import Home from './Home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Main = React.createClass({
  render(){
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <h3></h3>
      </MuiThemeProvider>
      <Home />
      </div>
    );
  }
});

export default Main;
