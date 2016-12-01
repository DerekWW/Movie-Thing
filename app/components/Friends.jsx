import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import React from 'react';
import Users from './Users';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
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
