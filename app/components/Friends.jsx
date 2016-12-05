/* eslint-disable no-console */

import React from 'react';
import Users from './Users';
import axios from 'axios';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    paddingTop: 20
  },
  titleStyle: {
    textAlign: 'center'
  }

  // marginRight: 20,
};

const Friends = React.createClass({
  getInitialState() {
    return {
      usersArray: [],
    };
  },

  componentDidMount() {
    axios.get('/api/user_search')
      .then((res) => {
        this.setState({ usersArray: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  updateFriends() {
    axios.get('/api/user_search')
      .then((res) => {
        this.setState({ usersArray: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return (
      <div className="container">
        <h5 style={styles.titleStyle}>Find your Friends</h5>
        <Users
          usersArray={this.state.usersArray}
        />
      </div>
    );
  }
});

export default Friends;
