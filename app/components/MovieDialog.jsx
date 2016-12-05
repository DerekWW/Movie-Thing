/* eslint-disable comma-dangle */

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import axios from 'axios';

const MovieDialog = React.createClass({
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

  handleClick() {
    const movieId = this.props.id;

    axios.delete('/api/user_movies', { data: { movieId }})
    .then(res => {
      this.setState({ open: false });
    }).then(() => {
      this.props.updateMovies();
    })
  },

  render() {
    const actions = [
      <FlatButton
        label="Remove from Favorites"
        onTouchTap={this.handleClick}
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
          <div>
          Overview: {this.props.overview}
          </div>
          <br />
          <div>
          Rating: {this.props.rating}
          </div>
        </Dialog>
      </div>
    );
  }
});

export default MovieDialog;
