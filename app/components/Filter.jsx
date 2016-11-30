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

const Filter = () => (
  <div>

    <TextField
      floatingLabelText="Search Movies"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      type="text"
    />
  </div>
);

export default Filter;
