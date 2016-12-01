import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import Users from './Users';

const style = {
  marginRight: 20,
};

const Friends = React.createClass ({
  getInitialState() {
    return {
      usersArray: [],
    };
  },

  componentDidMount() {
    axios.get('/api/user_search')
      .then((res) => {
        console.log(res);
        this.setState({ usersArray: res.data })
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return (
      <div>
        <h3>Friends Search</h3>
        <Users
          usersArray={this.state.usersArray}
        />
      </div>
    );
  }
});

export default Friends;
