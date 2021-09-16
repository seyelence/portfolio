import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Contact, Resume, Projects} from "./components";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Arial'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "10rem",
    
  },
  littleSpace:{
    marginTop: "2.5rem",
    margin: "15rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})





function App() {

  const sty = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/resume" exact component={() => <Resume />} />
          <Route path="/Projects" exact component={() => <Projects />} />


        </Switch>
      </Router>
</ThemeProvider>
    </div>
  );
}

export default App;