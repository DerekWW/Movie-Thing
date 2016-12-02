import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Li from './Li'

const styles = {
  ulStyle: {
    listStyleType: 'none',
  }
}

const Users = React.createClass({



  render() {
    const users = this.props.usersArray;

    const userlist = users.map((user, index) => {
      return <Li
        key={index}
        user={user}
      />
    })
    console.log(userlist);
    return (
        <ul style={styles.ulStyle}>
          { userlist }
        </ul>
    )
  }
});

export default Users;
