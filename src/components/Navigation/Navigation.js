import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import {Toolbar, Typography} from '@material-ui/core'
import './Navigation.css'
import {makeStyles} from '@material-ui/core/styles';


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
    },
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
      <Typography variant="h6"> home </Typography>
      </Link>
      </div>

      <div className="csslink"> <Link to="/skill" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
      let resume = document.getElementById("resume");
      resume && resume.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
      <Typography variant="h6"> skills </Typography>
      </Link>
      </div>

      <div className="csslink"> <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
          let projects = document.getElementById("projects");
          projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
        <Typography variant="h6"> projects  </Typography>
        </Link>
      </div>

      <div className="csslink"> <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
        let contact = document.getElementById("contact");
        contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
        }}>
        <Typography variant="h6"> contact </Typography>
        </Link>
      </div>

    </Toolbar>
    </div>

  );
}

export default Navigation;