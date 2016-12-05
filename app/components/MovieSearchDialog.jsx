/* eslint-disable comma-dangle */

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import axios from 'axios';

const styles = {
  dialogStyle: {
    fontFamily: 'Merriweather',
  },
}

const MovieSearchDialog = React.createClass({
  getInitialState() {
    return {
      open: false,
    };
  },

  handleOpen() {
    this.setState({ open: true });
  },

  handleClose() {
    this.setState({ open: false });
  },

  updateMovies() {
    this.props.updateMovies();
  },

  addToFavorites() {
    this.setState({ open: false });
    const movie = {
      id: this.props.id,
      rating: this.props.rating,
      title: this.props.title,
      poster: this.props.src,
      overview: this.props.overview,
      embedLink: this.props.embedLink,
    };

    axios.post('/api/user_movies', movie)
    .then((res) => {
      this.props.updateMovies();
      this.props.snackBar();
    });
  },

  render() {
    const actions = [
      <FlatButton
        keyboardFocused={false}
        label="Add to Favorites"
        onTouchTap={this.addToFavorites}
        primary={true}
      />,
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
        primary={true}
      />,

    ];

    return (
      <div>
        <img onTouchTap={this.handleOpen} src={this.props.src} />
        <Dialog
          actions={actions}
          modal={false}
          onRequestClose={this.handleClose}
          open={this.state.open}
          title={this.props.title}
        >
          <div style={styles.dialogStyle}>
          Overview: {this.props.overview}
          </div>
          <br />
          <div style={styles.dialogStyle}>
          Rating: {this.props.rating}
          </div>
        </Dialog>
      </div>
    );
  }
});

export default MovieSearchDialog;
