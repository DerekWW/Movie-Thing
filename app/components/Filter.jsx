import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
  floatingLabelStyle: {
    color: blue500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

const Filter = React.createClass ({

  handleSubmit(event) {
    event.preventDefault();
    this.props.movieSearch();
  },

  handleChange(event) {
    this.props.updateSearch(event.target.value)
  },

  render() {
    return (


    <form onSubmit={this.handleSubmit}>
      <TextField
        name="searchText"
        onChange={this.handleChange}
        value={this.props.searchText}
        floatingLabelText="Search Movies"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        type="text"
      />
    </form>
  )
  }

});

export default Filter;
