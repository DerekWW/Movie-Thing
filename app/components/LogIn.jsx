import Header from './Header';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
  errorStyle: {
    color: red400,
  },
  underlineStyle: {
    borderColor: red400,
  },
  floatingLabelStyle: {
    color: red400,
  },
  floatingLabelFocusStyle: {
    color: grey800,
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
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password};
    axios.post('/api/token', user)
    .then((response) => {
      this.props.checkIsLoggedIn();
      console.log(response);
    });

    this.props.handleCloseLogin();
    this.setState({ username: '', password: ''});
  },

  handleChange(event) {

    console.log(event.target.value);
    this.setState({ [event.target.name] : event.target.value});
    console.log(this.state);
  },


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
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
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            floatingLabelText="Create Password"
            errorText="This field is required."
            type='password'
            errorStyle={styles.floatingLabelStyle}
          />
          <br />
          <RaisedButton type="submit" label="LogIn" primary={true} style={styles.buttonStyle}/>
        </form>
    );
  }
});

export default LogIn;
