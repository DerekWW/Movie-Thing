import FriendMovies from './FriendMovies';
import React from 'react';
import { Match, Miss, Link } from 'react-router';
import Landing2 from './Landing2';
import UserMovies from './UserMovies';

const styles = {
  pageStyle: {
    backgroundColor: '#FFFFFF',
    fontFamily: 'Source Sans Pro',
    paddingTop: 20,
  },
};

const Home = React.createClass({

  // let mappedFriends =         _.map(this.props.friendsMoviesArray,(friend) => (
  //   {console.log(friend);}
  //   <div>
  //     <h5>{friend[0].first_name + ' ' + friend[0].last_name}</h5>
  //     {/* <FriendMovies
  //       friendsMoviesArray={movie}
  //     /> */}
  //   </div>
  //
  // ))

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

          {_.map(this.props.friendsMoviesArray,(friend, index) => (
            <div>
              <h5>{'Movies that ' + friend[0].first_name + ' ' + friend[0].last_name + ' is watching!'}</h5>
              <FriendMovies
                friendsMoviesArray={friend}
              />
            </div>

          ))}


        </div>
      </div>
    );
  }
});

export default Home;
