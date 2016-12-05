/* eslint-disable comma-dangle, no-console */

import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import axios from 'axios';
import { red400 } from 'material-ui/styles/colors';

const styles = {
  buttonStyle: {
    disabledBackgroundColor: red400,
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
      button = <RaisedButton
        backgroundColor="#EF5350"
        label=" Follow "
        onClick={this.addFriend}
        primary={false}
        style={styles.buttonStyle}
      />;
    }
    if (isFriend) {
      button = <RaisedButton
        label="Unfollow"
        onClick={this.removeFriend}
        secondary={false}
      />;
    }

    return (
      <li>
        <div>
          {button}
          {this.props.user.username} :
          {this.props.user.firstName}
          {this.props.user.lastName}
        </div>
      </li>
    );
  }

});

export default Li;
