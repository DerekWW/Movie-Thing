import React from 'react';
import TextField from 'material-ui/TextField';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather'
  },
  floatingLabelStyle: {
    color: red400,
  },
  floatingLabelFocusStyle: {
    color: red400,
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
