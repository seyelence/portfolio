import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import {Toolbar, Typography} from '@material-ui/core'
import './Navigation.css'
import {makeStyles} from '@material-ui/core/styles';
import { Container, Navbar, Nav } from "react-bootstrap";

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
      
      <Toolbar position="sticky" className={classes.bar}> 
        <Navbar collapseOnSelect fixed ='top' expand ='lg' variant='light'>  
          <Container>
            <Navbar.Toggle aria-controls="responsibe-navbar-nav"/>
              <Navbar.Collapse id ="responsibe-navbar-nav">
                <Nav className="ml-auto"> 
               
                <div className="csslink"> 
                <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'} }onClick={() => {
                  let index = document.getElementById("index");
                  index && index.scrollIntoView({ behavior: "smooth", block: "start" });
                  }} >
                  <Typography variant="h6"> home </Typography>
                </Link> 
                </div>

                <div className="csslink"> <Link to="/skill" style={{ color: 'inherit', textDecoration: 'inherit'}} onClick={() => {
                  let resume = document.getElementById("skilllss");
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Toolbar>
  );
}

export default Navigation;