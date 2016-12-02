import { BrowserRouter, Match, Miss } from 'react-router';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Landing from './Landing';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { black, grey100, grey200, grey800, grey900 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
  pageStyle: {
    backgroundColor: grey200,
    fontFamily: 'Merriweather',
    height: '100vh',
  },
};

const App = React.createClass({
  getInitialState() {
    return{
      isLoggedIn: false,
    }
  },

  componentDidMount() {
    axios.get('/api/token')
      .then((res) => {
        console.log(res);
        this.setState({ isLoggedIn: res.data })
      })
      .catch((err) => {
        console.error(err);
      });
  },

  checkIsLoggedIn() {
    axios.get('/api/token')
      .then((res) => {
        console.log(res);
        this.setState({ isLoggedIn: res.data })
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
              isLoggedIn={this.state.isLoggedIn}
              checkIsLoggedIn={this.checkIsLoggedIn}
            />
            <Main
              isLoggedIn={this.state.isLoggedIn}
              checkIsLoggedIn={this.checkIsLoggedIn}
            />
            <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
});

export default App;
