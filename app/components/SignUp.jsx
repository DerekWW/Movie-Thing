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

  getInitialState(){
    return {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
    }
  },

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});
    console.log(this.state);


  },

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      email : this.state.email,
      username : this.state.username,
      password : this.state.password
    };

    axios.post('/api/users', user)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    })

    this.setState({
      firstName : '',
      lastName : '',
      email : '',
      username : '',
      password : ''
    })


  },


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          floatingLabelText="First Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          floatingLabelText="Last Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          floatingLabelText="Username"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          floatingLabelText="Email"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <TextField
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          floatingLabelText="Create Password"
          errorText="This field is required."
          type='password'
          errorStyle={styles.floatingLabelStyle}
        />
        <br />
        <RaisedButton type="submit" label="SignUp" primary={true} style={styles.buttonStyle} />
      </form>
    );
  }
});

export default SignUp;
