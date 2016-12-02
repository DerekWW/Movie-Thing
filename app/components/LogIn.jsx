import Header from './Header';
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

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
    }
  },

  handleSubmit(event) {
    event.preventDefault();
    const user = { username: this.state.username, password: this.state.password};
    axios.post('/api/token', user)
    .then((response) => {
      this.props.checkIsLoggedIn();
      console.log(response);
      this.props.updateMovies();
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
          <div style={styles.formStyle}>Log In to Movie Thing</div>
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
            floatingLabelText="Password"
            // errorText="This field is required."
            type='password'
            floatingLabelStyle={styles.floatingLabelStyle}
            errorStyle={styles.floatingLabelStyle}
          />
          <br />
          <RaisedButton type="submit" label="LogIn" primary={false} style={styles.buttonStyle}/>
        </form>
      // </div>
    );
  }
});

export default LogIn;
