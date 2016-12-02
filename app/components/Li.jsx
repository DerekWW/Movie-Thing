import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';



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
        primary={true}
        label="Follow"
        onClick={this.addFriend}
      />
    }
    if(isFriend){
      button = <RaisedButton
        secondary={true}
        label="Unfollow"
        onClick={this.removeFriend}
      />
    }

    return (
      <li>
        <div>{button}{" " + this.props.user.firstName + '' + this.props.user.lastName}</div>
      </li>
    );

  }

});

export default Li;
