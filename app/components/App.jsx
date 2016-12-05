/* eslint-disable no-console */

import { BrowserRouter, Miss } from 'react-router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Landing2 from './Landing2';
import NotFound from './NotFound';
import React from 'react';
import axios from 'axios';
import { grey200 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    height: '100vh',
  },
};

const App = React.createClass({
  getInitialState() {
    return {
      isLoggedIn: false
    };
  },

  componentDidMount() {
    axios.get('/api/token')
      .then((res) => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  checkIsLoggedIn() {
    axios.get('/api/token')
      .then((res) => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch((err) => {
        console.error(err);
      });
  },

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div style={styles.pageStyle}>
            <Header
              checkIsLoggedIn={this.checkIsLoggedIn}
              isLoggedIn={this.state.isLoggedIn}
            />
            <Main
              checkIsLoggedIn={this.checkIsLoggedIn}
              isLoggedIn={this.state.isLoggedIn}
            />
            <Footer />
            <Miss component={NotFound} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
});

export default App;
