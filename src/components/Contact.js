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
function Contact() {
  const classes = styles(); 

  return (
    <section id = "contact">
    <ThemeProvider theme = {theme}>
    <div className="classes.wrapper">
      <div class="container">

            <h1 className={classes.bigSpace}>Contact</h1>
            <ul>
            <li className={classes.grid}> Email: thamanyvalbrune@gmail.com </li>
            <li className={classes.grid}> Phone: 617-792-1534 </li>
            <li className={classes.grid}> Address: 2 Prescott Terrace, Everett MA </li>
            </ul>
            <br/>

            <br/>

            <hr/>
      </div>
    </div>
    

    </ThemeProvider>
  

    </section>
  );
}

export default Contact;
