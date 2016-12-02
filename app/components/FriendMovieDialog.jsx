import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const FriendMovieDialog = React.createClass ({
  getInitialState(){
    return {
      open: false,
    };
  },

  handleOpen(){
    this.setState({open: true});
  },

  handleClose(){
    this.setState({open: false});
  },

  render(){
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />
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
})

export default FriendMovieDialog;
