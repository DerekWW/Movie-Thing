/* eslint-disable comma-dangle */

import FriendMovies from './FriendMovies';
import React from 'react';
import UserMovies from './UserMovies';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    height: '100vh',
    paddingTop: 20,
  },
};

const Home = React.createClass({
  render() {
    return (
      <div className="container" style={styles.pageStyle}>
        <div style={styles.pageStyle}>
          <h5>Your favorites</h5>
          <UserMovies
            updateMovies={this.props.updateMovies}
            userMoviesArray={this.props.userMoviesArray}
          />
          <br />
          <h5>Friends Favorites</h5>
          <FriendMovies
            friendsMoviesArray={this.props.friendsMoviesArray}
          />
        </div>
      </div>
    );
  }
});

export default Home;
