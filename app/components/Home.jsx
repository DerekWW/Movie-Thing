import React from 'react';
import UserMovies from './UserMovies';
import FriendMovies from './FriendMovies';
import MutualMovies from './MutualMovies';
import Filter from './Filter';


const Home = React.createClass({
  render(){
    return (
      <div>
        <Filter />
        <h3>Your Movies</h3>
        <UserMovies />
        <h3>Friends Movies</h3>
        <FriendMovies />
        <h3>Go to the Movies</h3>
        <MutualMovies />
      </div>
    );
  }
});

export default Home;
