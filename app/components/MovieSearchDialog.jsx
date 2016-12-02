import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';
// import Snackbar from 'material-ui/Snackbar';

const styles = {
  dialogStyle: {
    fontFamily: 'Merriweather',
  },
}


const MovieSearchDialog = React.createClass ({
  getInitialState() {
    return {
      open: false,
    };
  },

  handleOpen() {
    this.setState({open: true});
  },

  handleClose() {
    this.setState({ open: false });
  },

  updateMovies(){
    this.props.updateMovies()
  },



  addToFavorites() {
    console.log(this.props);
    this.setState({open: false});
    let movie = {
      id: this.props.id,
      rating: this.props.rating,
      title: this.props.title,
      poster: this.props.src,
      overview: this.props.overview,
      embedLink: this.props.embedLink,
    }
    axios.post('/api/user_movies', movie)
    .then((res) => {
      this.props.updateMovies()
      console.log(res);
    })
  },



  render(){
    const actions = [
      <FlatButton
        label="Add to Favorites"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.addToFavorites}
      />,
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <img src={this.props.src} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div style={styles.dialogStyle}>
          Overview: {this.props.overview}
          </div>
          <br />
          <div style={styles.dialogStyle}>
          Rating: {this.props.rating}
          </div>
       </Dialog>
       {/* <Snackbar
          open={this.state.open}
          message="Movie added to favorites"
          autoHideDuration={4000}
          onRequestClose={this.handleClose}
        /> */}
      </div>
    );
  }
})

export default MovieSearchDialog;
