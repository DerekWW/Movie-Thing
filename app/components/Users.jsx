/* eslint-disable comma-dangle */

import {List, ListItem} from 'material-ui/List';
import Li from './Li';
import React from 'react';

const styles = {
  ulStyle: {
    listStyleType: 'none',
  }
};

const Users = React.createClass({

  render() {
    const users = this.props.usersArray;

    const userlist = users.map((user, index) => {
      return <Li
        key={index}
        user={user}
      />;
    });

    return (
      <ul style={styles.ulStyle}>
        { userlist }
      </ul>
    );
  }
});

export default Users;
