import React , {useEffect} from "react";
import { Link, BrowserRouter } from "react-router-dom";
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor:"#ffff",
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingLeft: "65%",
        background: 'white',
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0
    },
    menuItem: {
        fontFamily: 'Courier New',
        color:" black",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "pink"
        },
      
    }
})

function Navigation(props) {
    
    useEffect(() => {
      let url = window.location.href.split("/");
      let target = url[url.length - 1].toLowerCase();
      let element = document.getElementById(target);
      element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);
    
    const classes = styles();

    return (
      <div id = "navbar">
      <Toolbar position="sticky" className={classes.bar}> 



      <Link to="/" onClick={() => {
      let index = document.getElementById("index");
      index && index.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    >
      <Typography variant="h6" className={classes.menuItem}> Home </Typography>
      </Link>




     <Link to="/resume" onClick={() => {
      let resume = document.getElementById("resume");
      resume && resume.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    >
      <Typography variant="h6" className={classes.menuItem}> Resume </Typography>
      </Link>


      <Link to="/projects" onClick={() => {
          let projects = document.getElementById("projects");
          projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
      <Typography variant="h6" className={classes.menuItem}> Projects  </Typography>
      </Link>



      <Link to="/contact" onClick={() => {
        let contact = document.getElementById("contact");
        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
    <Typography variant="h6" className={classes.menuItem}> Contact  </Typography>
    </Link>


    
    </Toolbar>
    </div>
  );
}

export default Navigation;