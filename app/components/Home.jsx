import React from 'react';
import { Match, Miss, Link } from 'react-router';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';
import Filter from './Filter';


const Home = React.createClass({
  render(){
    return (
      <div>
        <Link to='/friends'> Find Friends </Link>
        <Filter />
        <h4>Your Movies</h4>
        <UserMovies />
        <h4>Friends movies</h4>
        <FriendMovies />
        <MutualMovies />
      </div>
    );
  }
});

export default Home;
