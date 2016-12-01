import React from 'react';
import { black, grey100, grey200, grey800, grey900 } from 'material-ui/styles/colors';


const styles = {
  pageStyle: {
    backgroundColor: grey200,
  },
}

const Footer = React.createClass({
  render(){
    return (
      <div style={styles.pageStyle}></div>
    );
  }
});

export default Footer;
