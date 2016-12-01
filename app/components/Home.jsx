import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Landing from './Landing';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';

const Home = React.createClass({
  render(){
    console.log(this.props.userSearch);
    return (
      <div className="container">
        <div>
        <div>
        <Link to='/landing'> Landing Page </Link>
        </div>
        <h4>Your Movies</h4>
        <UserMovies
          userMoviesArray={this.props.userMoviesArray}
        />
        <h4>Friends movies</h4>
        <FriendMovies
          friendsMoviesArray={this.props.friendsMoviesArray}
        />
        <MutualMovies
          mutualMoviesArray={this.props.mutualMoviesArray}
        />
        </div>
      </div>
    );
  }
});

export default Home;
