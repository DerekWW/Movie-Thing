import Header from './Header';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

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
      this.props.checkIsLoggedIn();
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

    this.props.handleCloseSignup();
  },


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={styles.formStyle}>Sign up for Movie Thing</div>
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
          style={styles.floatingLabelFocusStyle}
          errorStyle={styles.floatingLabelStyle}
        />
        <br />
        <RaisedButton type="submit" label="SignUp" primary={true} style={styles.buttonStyle} />
      </form>
    );
  }
});

export default SignUp;
