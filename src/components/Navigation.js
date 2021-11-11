import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import {Toolbar, Typography} from '@material-ui/core'
import './Navigation.css'
import {createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { pink } from "@material-ui/core/colors";


const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor:"#FFFCFC",
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingLeft: "75%",
        background: 'white',
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0
    },/*
    menuItem: {
        fontFamily: 'Courier New',
        color:" black",
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
          color:"ff4081",
        },
    },*/
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

   
      <div className="csslink"> <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'} }onClick={() => {
      let index = document.getElementById("index");
      index && index.scrollIntoView({ behavior: "smooth", block: "start" });
    }} >
      <Typography variant="h6" className={classes.menuItem} > home </Typography>
      </Link>
      </div>


      <div className="csslink"> <Link to="/resume" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
      let resume = document.getElementById("resume");
      resume && resume.scrollIntoView({ behavior: "smooth", block: "start" });
    }}>
      <Typography variant="h6" className={classes.menuItem}> resume </Typography>
      </Link>
      </div>

      <div className="csslink"> <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
          let projects = document.getElementById("projects");
          projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
      <Typography variant="h6" className={classes.menuItem}> projects  </Typography>
      </Link>
      </div>


      <div className="csslink"> <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
        let contact = document.getElementById("contact");
        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
    <Typography variant="h6" className={classes.menuItem}> contact  </Typography>
    </Link>
    </div>


    </Toolbar>
    </div>

  );
}

export default Navigation;