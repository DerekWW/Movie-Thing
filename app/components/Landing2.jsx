import React from 'react';
import Header from './Header';
import Login from './LogIn';
import SignUp from './SignUp';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import FriendMovieDialog from './FriendMovieDialog';



const styles = {
  pageStyle: {
    backgroundColor: '#0D5813',
    textAlign: 'center',
    fontFamily: 'Six Caps',
    height: '100vh',
  },
  // raisedButtonStyle: {
  //   margin: 15,
  //   backgroundColor: '#0D5813',
  //   fontFamily: 'Six Caps'
  // },

}

const Landing2 = React.createClass({
  getInitialState(){
    return {
      signupOpen: false,
      loginOpen: false,
  };
},

  handleOpenSignup(){
    this.setState({signupOpen: true});
  },

  handleCloseSignup(){
    this.setState({signupOpen: false});
  },

  handleOpenLogin(){
    this.setState({loginOpen: true});
  },

  handleCloseLogin(){
    this.setState({loginOpen: false});
  },

  render(){
    const actionsSignup = [
      <FlatButton
        label="Submit"
        primary={false}
        keyboardFocused={false}
        onClick={this.handleCloseSignup}
      />,
      <FlatButton
        label="Close"
        primary={false}
        onClick={this.handleCloseSignup}
      />,
    ];
    const actionsLogin = [
      <FlatButton
        label="Close"
        primary={false}
        onClick={this.handleCloseLogin}
        style={{backgroundColor: grey200}}
      />,
    ];
    return (
      <div style={styles.pageStyle}>
        <div className="row">
          <div className="container">
            <div className="landing">
              <h1>the following movie has been APPROVED by </h1>
              <h1>MOVIE THING </h1>
              <h1>to connect film fans and their friends</h1>
                <div className="rating">
                  <div>
                    <div className="ratingTitle"> <h5> MOVIE THING </h5></div>
                    <div className="ratingButtons">
                    <RaisedButton
                      className="ratingRaisedButton"
                      label="Signup"
                      secondary={false}
                      onTouchTap={this.handleOpenSignup}
                      bodyStyle={{backgroundColor: '#0D5813'}}
                      // style={styles.ratingRaisedButton}

                    />
                      <Dialog
                        actions={actionsSignup}
                        modal={false}
                        open={this.state.signupOpen}
                        onRequestClose={this.handleClose}
                        // bodyStyle={{backgroundColor: '#0D5813'}}
                        >
                          <SignUp
                            checkIsLoggedIn={this.props.checkIsLoggedIn}
                            handleCloseSignup={this.handleCloseSignup}
                            updateMovies={this.props.updateMovies}
                          />
                        </Dialog>
                    <RaisedButton
                      className="ratingRaisedButton"
                      label="Login"
                      secondary={false}
                      style={styles.raisedButtonStyle}
                      onTouchTap={this.handleOpenLogin}
                    />
                      <Dialog
                        actions={actionsLogin}
                        modal={false}
                        open={this.state.loginOpen}
                        onRequestClose={this.handleClose}
                        bodyStyle={{backgroundColor: grey200}}
                        >
                          <Login
                            checkIsLoggedIn={this.props.checkIsLoggedIn}
                            handleCloseLogin={this.handleCloseLogin}
                            updateMovies={this.props.updateMovies}
                          />
                        </Dialog>
                        </div>
                  <div className="ratingDiv">
                    <h6></h6>

                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
          {/* <div className="row"> */}
            {/* <RaisedButton
              label="Signup"
              secondary={false}
              style={styles.raisedButtonStyle}
              onTouchTap={this.handleOpenSignup}
            />
              <Dialog
                actions={actionsSignup}
                modal={false}
                open={this.state.signupOpen}
                onRequestClose={this.handleClose}
                bodyStyle={{backgroundColor: grey200}}
                >
                  <SignUp
                    checkIsLoggedIn={this.props.checkIsLoggedIn}
                    handleCloseSignup={this.handleCloseSignup}
                    updateMovies={this.props.updateMovies}
                  />
                </Dialog> */}

              {/* <RaisedButton
                label="Login"
                secondary={false}
                style={styles.raisedButtonStyle}
                onTouchTap={this.handleOpenLogin}
              />
                <Dialog
                  actions={actionsLogin}
                  modal={false}
                  open={this.state.loginOpen}
                  onRequestClose={this.handleClose}
                  bodyStyle={{backgroundColor: grey200}}
                  >
                    <Login
                      checkIsLoggedIn={this.props.checkIsLoggedIn}
                      handleCloseLogin={this.handleCloseLogin}
                      updateMovies={this.props.updateMovies}
                    />
                  </Dialog> */}
              {/* </div> */}
            </div>
    );
  }
});

export default Landing2;
