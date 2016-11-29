import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
});

export default App;
