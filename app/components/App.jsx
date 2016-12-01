import { BrowserRouter } from 'react-router';
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
    fontFamily: 'Merriweather'
  },
};

const App = React.createClass({
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div style={styles.pageStyle}>
            <Header />
            <Main />
            <Footer />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
});

export default App;
