import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


const MovieDialog = React.createClass ({
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

  handleClick() {
    let movieId = this.props.id
    axios.delete(`/api/user_movies`, {data: {movieId}})
    .then(res => {
      this.setState({open: false});
    }).then(() => {

    })
  },



  render(){
    const actions = [
      <FlatButton
        label="Remove from Favorites"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClick}
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

export default MovieDialog;
