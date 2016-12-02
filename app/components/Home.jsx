import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Landing from './Landing';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
}

const Home = React.createClass({
  render(){
    // console.log(this.props.userSearch);
    return (
      <div className="container" style={styles.pageStyle}>
        <div>
        <h4>Your Movies</h4>
        <UserMovies
          userMoviesArray={this.props.userMoviesArray}
          updateMovies={this.props.updateMovies}
        />
        <h4>Friends movies</h4>
        <FriendMovies
          friendsMoviesArray={this.props.friendsMoviesArray}
        />
        {/* <MutualMovies
          mutualMoviesArray={this.props.mutualMoviesArray}
        /> */}
        </div>
      </div>
    );
  }
});

export default Home;
