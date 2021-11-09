import React from "react";
import { Navigation, Home, Contact, Resume, Projects, ScrollToTop} from "./components";
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './index.css';
import { Brightness1Outlined } from "@material-ui/icons";

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
      <BrowserRouter>
      
      <Navigation/>
      <Home/>
      <Resume/>
      <Projects/>
      <Contact/>
      
      <Switch>
      <ScrollToTop>
      <Route exact path="/" component={withRouter(Home) } />
      <Route exact path="/Resume" component={withRouter(Resume)} />

      <Route exact path="/Projects" component={withRouter(Projects)} />
      <Route exact path="/Contact" component={withRouter(Contact)} />
      </ScrollToTop>
      </Switch>

      </BrowserRouter>
</ThemeProvider>
    </div>
  );
}

export default App;