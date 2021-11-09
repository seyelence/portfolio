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
  
function Home() {
    const classes = styles(); 

        return (
          <section id = "index">
            <ThemeProvider theme={theme}>

          <div className="App">
              <div className={classes.wrapper}>
<h1 className={classes.bigSpace}>    Hello World! </h1>
                <h5 className={classes.littleSpace} color="pink">
      My name is Thamany Valbrune, and I am a junior at University of Massachusetts- Boston. My interests are within web development and cybersecurity. Check out my links and stuff!
                </h5>
      <hr/>
      </div>  
      </div>
      </ThemeProvider>
      </section>

        );
        
}

export default Home;