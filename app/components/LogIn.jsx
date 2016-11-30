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
    axios.post('/api/token', user).then((response) => {
      console.log(response);
    })
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
          <RaisedButton type="submit" label="LogIn" primary={true} style={styles.buttonStyle} />
        </form>
    );
  }
});

export default LogIn;
