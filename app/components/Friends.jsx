import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};
let currentFriends = [];

const Friends = React.createClass ({
  setInitialState() {
    return {
  addToFriends() {
    let newFriends;

    const friendIds = this.currentFriends.map((friend) => friend.id);

    if(friendIds.indexOf(friend.id) === -1) {
      newFriends = this.currentFriends.concat(friend);
    }

    this.setState({ currentFriends: newFriends});
    console.log(newFriends);
  },
  }
},


// const Friends = React.createClass ({
  render() {
    console.log(this.state);
    console.log(this.props.friendsArray);
    return (
      <div>
        <AutoComplete
          floatingLabelText="Find friends"
          hintText="Username"
          filter={(searchText, key) => searchText.toLowerCase() === key.toLowerCase()}
          dataSource={this.props.friendsArray}
          maxSearchResults={0}
        />
        <FloatingActionButton mini={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>

        <h3>Friend List</h3>
      </div>
    );
  }
});

export default Friends;
