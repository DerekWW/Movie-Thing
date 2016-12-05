import React from 'react';
import TextField from 'material-ui/TextField';
import { red400 } from 'material-ui/styles/colors';

const styles = {
  containerStyle: {
    padding: '10px'
  },
  floatingLabelStyle: {
    color: red400,
    fontFamily: 'Merriweather',
    fontSize: 24
  },
  floatingLabelFocusStyle: {
    color: red400,
    fontFamily: 'Merriweather'
  }
};

const Filter = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    this.props.movieSearch();
  },

  handleChange(event) {
    this.props.updateSearch(event.target.value);
  },

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            floatingLabelStyle={styles.floatingLabelStyle}
            floatingLabelText="Search Movies"
            name="searchText"
            onChange={this.handleChange}
            type="text"
            value={this.props.searchText}
          />
        </form>
      </div>
    );
  }

});

export default Filter;
