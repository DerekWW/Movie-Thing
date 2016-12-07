/* eslint-disable no-console, max-len */

import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const styles = {
  formStyle: {
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    fontSize: 24,
  },
  errorStyle: {
    color: '#0D5813',
  },
  underlineStyle: {
    color: '#0D5813',
  },
  floatingLabelStyle: {
    color: '#0D5813',
    fontFamily: 'Source Sans Pro',
  },
  floatingLabelFocusStyle: {
    color: '#0D5813',
    fontFamily: 'Source Sans Pro',
  },
  buttonStyle: {
    margin: 12,
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
