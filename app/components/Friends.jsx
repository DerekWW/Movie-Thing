import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';

const style = {
  marginRight: 20,
};

const Friends = React.createClass ({
  getInitialState() {
    return {
      searchText: ''
    };
  },

  handleUpdateInput(searchText) {
    this.setState({ searchText });
  },

  handleClick() {
    this.props.handleAddToFriendsList(this.state.searchText);
  },

  render() {
    console.log(this.state);
    console.log(this.props.usersArray);

    return (
      <div>
        <AutoComplete
          floatingLabelText="Find friends"
          hintText="Username"
          filter={(searchText, key) => searchText.toLowerCase() === key.toLowerCase()}
          dataSource={this.props.usersArray}
          maxSearchResults={0}
          searchText={ this.state.searchText }
          onUpdateInput={ this.handleUpdateInput }
        />

        <h3>Friend List</h3>
        <ul>
          {this.props.friends.map((friend, index) => {
            return <li key={index}>{friend.text}</li>
          })}
        </ul>
      </div>
    );
  }
});

export default Friends;
