import { BrowserRouter, Miss } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotFound from './NotFound';
import React from 'react';
import { grey200 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    height: '100vh'
  }
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
