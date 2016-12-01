import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const Users = React.createClass({
  render() {
    const users = this.props.usersArray;
    console.log(users);

    const userlist = users.map((user, index) => {
      return <ListItem
        key={index}
        primaryText={user.username}
        rightIcon={<ActionInfo />}
      />
    })
    return (
        <List>
          { userlist }
        </List>
    )
  }
});

export default Users;
