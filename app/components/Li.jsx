import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  buttonStyle: {
    disabledBackgroundColor: red400,
  },
}

const Li = React.createClass({

  getInitialState(){
    return {
      isMyFriend: false,
    };
  },

  addFriend(){
    let friendId = {
      userId: this.props.user.id
    }
    axios.post('/api/friends', friendId)
    .then((res) => {
      console.log(res);
      this.isFriend()
    })
    .catch(() => {
      this.isFriend()

    })
  },

  removeFriend(){
    let friendId = this.props.user.id;
    axios.delete('/api/friends', {data: { friendId }})
    .then((res) => {
      this.isFriend()
    })
    .catch(()=> {
      this.isFriend()
    })

  },

  isFriend(){
    const friendId = { userId: this.props.user.id}
    axios.post('/api/friends/check', friendId)
    .then((res) => {
      this.setState({ isMyFriend: res.data})
    })
  },

  componentDidMount(){
    const friendId = { userId: this.props.user.id}
    axios.post('/api/friends/check', friendId)
    .then((res) => {
      this.setState({ isMyFriend: res.data})
    })
    .catch(err => {
      console.error(err);
    })
  },


  render() {
    const isFriend = this.state.isMyFriend;

    let button = null;

    if(!isFriend) {
      button = <RaisedButton
        primary={false}
        label=" Follow "
        onClick={this.addFriend}
        style={styles.buttonStyle}
        backgroundColor="#EF5350"
      />
    }
    if(isFriend){
      button = <RaisedButton
        secondary={false}
        label="Unfollow"
        onClick={this.removeFriend}
      />
    }

    return (
      <li>
        <div>
          {button} {this.props.user.username} : {this.props.user.firstName} {this.props.user.lastName}</div>
      </li>
    );

  }

});

export default Li;
