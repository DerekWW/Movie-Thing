import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const styles = {
  radioButton: {
    marginTop: 16,
  },
};

const MutualMoviesDialog = React.createClass({
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

  render() {
    const actions = [
      <FlatButton
        keyboardFocused={false}
        label="Go to the movies"
        onTouchTap={this.handleClose}
        primary={true}
      />,
      <FlatButton
        label="Cancel"
        onTouchTap={this.handleClose}
        primary={true}
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
    ];

    const radios = [];

    for (let i = 0; i < friends.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          label={`Option ${i + 1}`}
          style={styles.radioButton}
          value={`value${i + 1}`}
        />
      );
    }

    return (
      <div>
        <img onTouchTap={this.handleOpen} src={this.props.src} />
        <Dialog
          actions={actions}
          autoScrollBodyContent={true}
          modal={false}
          onRequestClose={this.handleClose}
          open={this.state.open}
          title="Scrollable Dialog"
        >
          <RadioButtonGroup defaultSelected="not_light" name="shipSpeed" >
            {radios}
          </RadioButtonGroup>
        </Dialog>
      </div>
    );
  }
});

export default MutualMoviesDialog;
