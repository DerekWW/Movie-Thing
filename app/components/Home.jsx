import React from 'react';
import UserMovies from './UserMovies'
import FriendMovies from './FriendMovies'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const Home = React.createClass({
  render(){
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <h3>Your Movies</h3>
      </MuiThemeProvider>
      <UserMovies />
      <h3>Friends Movies</h3>
      <FriendMovies />
      </div>
    );
  }
});

export default Home;
