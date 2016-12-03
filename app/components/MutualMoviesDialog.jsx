import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};


const MutualMoviesDialog = React.createClass ({
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
        label="Go to the movies"
        primary={true}
        keyboardFocused={false}
        onTouchTap={this.handleClose}
      />,
     <FlatButton
       label="Cancel"
       primary={true}
       onTouchTap={this.handleClose}
     />,
   ];

   const friends = [
    {
      first: 'Ted',
      last: 'Danson',
    },
    {
      first: 'John',
      last: 'Ratzenburger',
    },
    {
      first: 'George',
      last: 'Wendt',
    },
    {
      first: 'Shelley',
      last: 'Long',
    },
    {
      first: 'Rhea',
      last: 'Perlman',
    },
    {
      first: 'Bebe',
      last: 'Neuwirth',
    },
   ]

   const radios = [];
    for (let i = 0; i < friends.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
        />
      );
    }

    return (
      <div>
        <img src={this.props.src} onTouchTap={this.handleOpen} />
        <Dialog
          title="Scrollable Dialog"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
       </Dialog>
      </div>
    );
  }
})

export default MutualMoviesDialog;
