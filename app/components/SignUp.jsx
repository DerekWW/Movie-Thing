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

const SignUp = React.createClass({
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="First Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          floatingLabelText="Last Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
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
        <RaisedButton label="SignUp" primary={true} style={styles.buttonStyle} />
      </div>
    );
  }
});

export default SignUp;
