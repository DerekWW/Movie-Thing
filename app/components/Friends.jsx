import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  marginRight: 20,
};



// const friendsArray = [
//   {
//     text: 'EdgarM',
//     id: 1,
//     value: (
//       <MenuItem
//         primaryText="Edgar Martinez"
//       />
//     ),
//   },
//   {
//     text: 'JayB',
//     id: 2,
//     value: (
//       <MenuItem
//         primaryText="Jay Buhner"
//       />
//     ),
//   },
//   {
//     text: 'KenG',
//     id: 3,
//     value: (
//       <MenuItem
//         primaryText="Ken Griffey, Jr."
//       />
//     ),
//   },
//   {
//     text: 'DanW',
//     id: 4,
//     value: (
//       <MenuItem
//         primaryText="Dan Wilson"
//       />
//     ),
//   },
//   {
//     text: 'LouP',
//     id: 5,
//     value: (
//       <MenuItem
//         primaryText="Lou Pinella"
//       />
//     ),
//   },
// ];

// const currentFriends = [];
//
// addToFriends() {
//   let newFriends;
//
//   const friendIds = this.currentFriends.map((friend) => friend.id);
//
//   if(friendIds.indexOf(friend.id) === -1) {
//     newFriends = this.currentFriends.concat(friend);
//   }
//
//   this.setState({ currentFriends: newFriends});
//   console.log(newFriends);
// },


const Friends = React.createClass ({
  render() {
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
