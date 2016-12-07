/* eslint-disable no-console, max-len */

import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const styles = {
  buttonStyle: {
    margin: 12,
    backgroundColor: '#0D5813',
    color: '#FFFFFF',
  },

  floatingLabelStyle: {
    color: '#0D5813',
    fontFamily: 'Source Sans Pro',
  },

  floatingLabelFocusStyle: {
    color: '#EE6352',
    fontFamily: 'Source Sans Pro',
  },

  formStyle: {
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    fontSize: 24,
    color: '#EE6352',
  },

  inputStyle: {
    color: '#0D5813',
    textTransform: 'uppercase',
    fontSize: 12
  },

  underlineStyle: {
    color: '#0D5813',
  },
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
    .then(() => {
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
      <form onSubmit={this.handleSubmit} className="landingLoginDialog">
        <div style={styles.formStyle}>Log In to Movie Thing</div>
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Username"
          inputStyle={styles.inputStyle}
          name="username"
          onChange={this.handleChange}
          underlineStyle={styles.underlineStyle}
          value={this.state.username}
        />
        <br />
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Password"
          name="password"
          inputStyle={styles.inputStyle}
          onChange={this.handleChange}
          type="password"
          underlineStyle={styles.underlineStyle}
          value={this.state.password}
        />
        <br />
        <FlatButton
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
