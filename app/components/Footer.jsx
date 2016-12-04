import React from 'react';
import { grey200 } from 'material-ui/styles/colors';

const styles = {
  pageStyle: {
    backgroundColor: grey200
  }
};

const Footer = React.createClass({
  render() {
    return (
      <div style={styles.pageStyle} />
    );
  }
});

export default Footer;
