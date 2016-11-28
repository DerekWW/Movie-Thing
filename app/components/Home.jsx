import React from 'react';
import UserMovies from './UserMovies'
import FriendMovies from './FriendMovies'


const Home = React.createClass({
  render(){
    return (
      <div>
        <h3>Your Movies</h3>
        <UserMovies />
        <h3>Friends Movies</h3>
        <FriendMovies />
      </div>
    );
  }
});

export default Home;
