import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto'
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
function Projects() {
  const classes = styles(); 
  return (
    <section id="projects">
    <div className="home">
      <div class="container">

          <div class="classes.wrapper">
            <h1 className={classes.bigSpace}> Projects </h1>
            <p>
       Checkout some of my projects below! Will update as I gain more experience and create new things.
            </p>
            <h3> Smart Game AI </h3>
            <a href="https://github.com/seyelence/cs310/tree/main/pa3" rel="noreferrer">
            Check it out on GitHub </a>

          </div>
          <br/>
          <br/>
          <hr/>
        </div>
      </div>
      </section>
  );
}

export default Projects;