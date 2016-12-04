import Dialog from 'material-ui/Dialog';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const FriendMovieDialog = React.createClass({
  getInitialState() {
    return {
      open: false
    };
  },

  handleOpen() {
    this.setState({ open: true });
  },

  handleClose() {
    this.setState({ open: false });
  },

  render() {
    const actions =
      <FlatButton
        label="Close"
        onTouchTap={this.handleClose}
        primary={true}
      />;

    return (
      <div>
        <img
          onTouchTap={this.handleOpen}
          src={this.props.src}
        />
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

export default FriendMovieDialog;
