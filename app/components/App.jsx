import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const App = () => (
  <MuiThemeProvider>
  <div>
    <h1>Hello world</h1>
  </div>
  </MuiThemeProvider>
);

export default App;
