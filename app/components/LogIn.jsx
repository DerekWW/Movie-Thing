/* eslint-disable comma-dangle, no-console, max-len */

import { grey200, grey800, red400 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const styles = {
  formStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    textAlign: 'center',
    fontSize: 24,
  },
  errorStyle: {
    color: red400,
  },
  underlineStyle: {
    borderColor: red400,
  },
  floatingLabelStyle: {
    color: red400,
    fontFamily: 'Merriweather'
  },
  floatingLabelFocusStyle: {
    color: grey800,
    fontFamily: 'Merriweather'
  },
  buttonStyle: {
    margin: 12,
    backgroundColor: red400,
  }
};

const LogIn = React.createClass({

  getInitialState() {
    return {
      username: '',
      password: ''
    };
  },

  handleSubmit(event) {
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password };

    axios.post('/api/token', user)
    .then((response) => {
      this.props.checkIsLoggedIn();
      this.props.updateMovies();
    });

    this.props.handleCloseLogin();
    this.setState({ username: '', password: '' });
  },

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={styles.formStyle}>Log In to Movie Thing</div>
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Username"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <br />
        <TextField
          errorStyle={styles.floatingLabelStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Password"
          name="password"
          onChange={this.handleChange}
          type="password"
          value={this.state.password}
        />
        <br />
        <RaisedButton
          label="LogIn"
          primary={false}
          style={styles.buttonStyle}
          type="submit"
        />
      </form>
    );
  }
});

export default LogIn;
