import React from 'react';
import { Match, Miss, Link } from 'react-router';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';
import Filter from './Filter';
// import Friends from './Friends';


const Home = React.createClass({
  render(){
    return (
      <div>
        <Link to='/friends'> Find Friends </Link>
        <Filter />
        <UserMovies />
        <h4>Friends movies</h4>
        <FriendMovies />
        <MutualMovies />
      </div>
    );
  }
});

export default Home;
