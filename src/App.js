import React from 'react';
import logo from './logo.svg';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Root from "./Root";
import Navigation from "./Navigation";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#d50032",
            dark: "rgb(0,45,114)",
        },
    },
    spacing: 4,
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <Navigation />
      </MuiThemeProvider>
  );
}

export default App;
