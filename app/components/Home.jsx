import React from 'react';
import { Match, Miss, Link } from 'react-router';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';

const Home = React.createClass({
  render(){
    console.log(this.props.userMoviesArray);
    return (
      <div>
        <Link to='/friends'> Find Friends </Link>
        <Filter />
        <h4>Your Movies</h4>
        <UserMovies />
        <Link to='/moviesearch'>Find Movies </Link>
        <UserMovies
          userMoviesArray={this.props.userMoviesArray}
        />
        <h4>Friends movies</h4>
        <FriendMovies />
        <MutualMovies
          mutualMoviesArray={this.props.mutualMoviesArray}
        />
      </div>
    );
  }
});

export default Home;
