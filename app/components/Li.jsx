/* eslint-disable no-console */

import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import React from 'react';
import axios from 'axios';
import { red400 } from 'material-ui/styles/colors';

const styles = {
  friendStyle: {
    paddingTop: 10,
  },

  iconStyleIsFriend: {
    color: '#EE6352',
  },

  iconStyleNotFriend: {
    color: '#0D5813',
  },
};

const Li = React.createClass({

  getInitialState() {
    return {
      isMyFriend: false,
    };
  },

  componentDidMount() {
    const friendId = { userId: this.props.user.id };

    axios.post('/api/friends/check', friendId)
    .then((res) => {
      this.setState({ isMyFriend: res.data });
    })
    .catch((err) => {
      console.error(err);
    });
  },

  removeFriend() {
    const friendId = this.props.user.id;

    axios.delete('/api/friends', { data: { friendId }})
    .then((res) => {
      this.isFriend();
    })
    .catch(() => {
      this.isFriend();
    });
  },

  isFriend() {
    const friendId = { userId: this.props.user.id };

    axios.post('/api/friends/check', friendId)
    .then((res) => {
      this.setState({ isMyFriend: res.data });
    });
  },

  addFriend() {
    const friendId = { userId: this.props.user.id };

    axios.post('/api/friends', friendId)
    .then((res) => {
      console.log(res);
      this.isFriend();
    })
    .catch(() => {
      this.isFriend();
    });
  },

  render() {
    const isFriend = this.state.isMyFriend;

    let button = null;

    if (!isFriend) {
      button = <IconButton
        iconClassName="material-icons"
        onClick={this.addFriend}
        iconStyle={styles.iconStyleNotFriend}
      >person_add</IconButton>;
    }
    if (isFriend) {
      button = <IconButton
        iconClassName="material-icons"
        onClick={this.removeFriend}
        iconStyle={styles.iconStyleIsFriend}
      >stars</IconButton>;
    }

    return (
      <div className="container">
        <div className="two columns">{button}</div>
        <div className="six columns" style={styles.friendStyle}>Username: {this.props.user.username}</div>
        {/* <div className="three columns">{this.props.user.username}</div> */}
      </div>
    );
  }

});

export default Li;
