import React from "react";
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            

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