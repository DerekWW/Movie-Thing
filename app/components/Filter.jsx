import React from 'react';
import TextField from 'material-ui/TextField';
import { black, grey100, grey200, grey800, grey900, red400 } from 'material-ui/styles/colors';

const styles = {
  containerStyle: {
    padding: '10px',
  },
  floatingLabelStyle: {
    color: red400,
    fontFamily: 'Merriweather',
    fontSize: 24,
  },
  floatingLabelFocusStyle: {
    color: red400,
    fontFamily: 'Merriweather'
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
      <div className="container">
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
      </div>
    )
  }

});

export default Filter;
