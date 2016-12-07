import {List, ListItem} from 'material-ui/List';
import Li from './Li';
import React from 'react';

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
      <div>
        { userlist }
      </div>
    );
  }
});

export default Users;
