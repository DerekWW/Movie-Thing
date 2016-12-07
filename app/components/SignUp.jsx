/* eslint-disable no-console */

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
    fontSize: 14
  },

  floatingLabelFocusStyle: {
    color: '#EE6352',
    fontFamily: 'Source Sans Pro',
    fontSize: 14
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

const SignUp = React.createClass({

  getInitialState() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    };
  },

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  },

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    axios.post('/api/users', user)
    .then(() => {
      this.props.checkIsLoggedIn();
      this.props.updateMovies();
    })
    .catch((err) => {
      console.error(err);
    });

    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: ''
    });

    this.props.handleCloseSignup();
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="landingSignupDialog">
        <div style={styles.formStyle}>Sign up for Movie Thing</div>
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="First Name"
          name="firstName"
          onChange={this.handleChange}
          inputStyle={styles.inputStyle}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          value={this.state.firstName}
        />
        <br />
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Last Name"
          inputStyle={styles.inputStyle}
          name="lastName"
          onChange={this.handleChange}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          value={this.state.lastName}
        />
        <br />
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Username"
          inputStyle={styles.inputStyle}
          name="username"
          onChange={this.handleChange}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          value={this.state.username}
        />
        <br />
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Email"
          inputStyle={styles.inputStyle}
          name="email"
          onChange={this.handleChange}
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          value={this.state.email}
        />
        <br />
        <TextField
          errorStyle={styles.floatingLabelStyle}
          errorText="This field is required."
          floatingLabelText="Create Password"
          inputStyle={styles.inputStyle}
          name="password"
          onChange={this.handleChange}
          style={styles.floatingLabelFocusStyle}
          type="password"
          underlineFocusStyle={styles.underlineStyle}
          underlineStyle={styles.underlineStyle}
          value={this.state.password}
        />
        <br />
        <FlatButton
          label="SignUp"
          labelStyle={styles.labelStyle}
          style={styles.buttonStyle}
          type="submit"
        />
      </form>
    );
  }
});

export default SignUp;
