import React from 'react';
import FontIcon from 'material-ui/FontIcon';
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
  actionsContainerStyle: {
    backgroundColor: '#FFFFFF',
  },

  bodyStyle: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    textAlign: 'center',
  },

  contentStyle: {
    width: '50%',
  },

  flatButtonStyle: {
    margin: 10,
    color: '#0D5813',
    backgroundColor: '#FFFFFF',
  },

  fontIconStyle: {
    color: '#0D5813',
  },

  hoverColor: {
    color: '#FFFFFF',
  },

  labelStyle: {
    fontSize: 18,
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
  },

  overlayStyle: {
    height: '100%',
  },

  pageStyle: {
    backgroundColor: '#0D5813',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    height: '100vh',
  },
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
      <FontIcon
        className="material-icons"
        onClick={this.handleCloseSignup}
        style={styles.fontIconStyle}
      >close</FontIcon>
    ];
    const actionsLogin = [
      <FontIcon
        className="material-icons"
        onClick={this.handleCloseLogin}
        style={styles.fontIconStyle}
        >close</FontIcon>
    ];
    return (
      <div style={styles.pageStyle}>
        <div className="row">
            <div className="landing">
              <p className="landingText">the following website has been
                <span className="movieThing"> approved </span> by <br />
                <span className="movieThing"> movie thing </span>
                <br /> to connect film fans and their friends </p>
                <div className="row">
                <div className="rating">

                  <div className="ratingTitle"> <p> MOVIE THING </p></div>
                  <div className="ratingDiv">
                    <p>G</p>
                  </div>
                    <div className="ratingButtons">
                      <FlatButton
                        label="Signup"
                        labelStyle={styles.labelStyle}
                        onTouchTap={this.handleOpenSignup}
                        secondary={false}
                        style={styles.flatButtonStyle}
                      />
                        <Dialog
                          actions={actionsSignup}
                          actionsContainerStyle={styles.actionsContainerStyle}
                          autoScrollBodyContent={true}
                          bodyStyle={styles.bodyStyle}
                          contentStyle={styles.contentStyle}
                          modal={false}
                          onRequestClose={this.handleClose}
                          open={this.state.signupOpen}
                          >
                            <SignUp
                              checkIsLoggedIn={this.props.checkIsLoggedIn}
                              handleCloseSignup={this.handleCloseSignup}
                              updateMovies={this.props.updateMovies}
                            />
                          </Dialog>
                      <FlatButton
                        label="Login"
                        labelStyle={styles.labelStyle}
                        onTouchTap={this.handleOpenLogin}
                        secondary={false}
                        style={styles.flatButtonStyle}
                      />
                      <Dialog
                        actions={actionsLogin}
                        autoScrollBodyContent={true}
                        bodyStyle={styles.bodyStyle}
                        contentStyle={styles.contentStyle}
                        modal={false}
                        onRequestClose={this.handleClose}
                        open={this.state.loginOpen}
                        >
                          <Login
                            checkIsLoggedIn={this.props.checkIsLoggedIn}
                            handleCloseLogin={this.handleCloseLogin}
                            updateMovies={this.props.updateMovies}
                          />
                        </Dialog>
                </div>
              </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
});

export default Landing2;
