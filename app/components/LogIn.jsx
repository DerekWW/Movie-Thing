import Header from './Header';
import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  buttonStyle: {
    margin: 12,
  }
};

const LogIn = React.createClass({
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Username"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          floatingLabelText="Create Password"
          errorText="This field is required."
          type='password'
          errorStyle={styles.floatingLabelStyle}
        />
        <br />
        <RaisedButton label="LogIn" primary={true} style={styles.buttonStyle} />
      </div>
    );
  }
});

export default LogIn;
