/* eslint-disable no-console */

import { grey800, red400 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

const styles = {
  formStyle: {
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
  }
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
      <form onSubmit={this.handleSubmit}>
        <div style={styles.formStyle}>Sign up for Movie Thing</div>
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="First Name"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <br />
        <TextField
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Last Name"
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
        <br />
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
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelText="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <br />
        <TextField
          errorStyle={styles.floatingLabelStyle}
          errorText="This field is required."
          floatingLabelText="Create Password"
          name="password"
          onChange={this.handleChange}
          style={styles.floatingLabelFocusStyle}
          type="password"
          value={this.state.password}
        />
        <br />
        <RaisedButton
          label="SignUp"
          primary={true}
          style={styles.buttonStyle}
          type="submit"
        />
      </form>
    );
  }
});

export default SignUp;
