import React from "react";
import { Link, withRouter } from "react-router-dom";
import {Toolbar, Typography} from '@material-ui/core'

import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor:"#ffff",
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingLeft: "65%",

    
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

    const classes = styles();

    
  return (
    <Toolbar position="sticky"  className={classes.bar}>   

    <div className="navi">
        <div class="container">
          <div>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                <Typography variant="h6" className={classes.menuItem}>

                  Home
                  <span class="sr-only">(current)</span>
                  </Typography>

                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/resume">
                <Typography variant="h6" className={classes.menuItem}>
                  Resume
                  </Typography>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                <Typography variant="h6" className={classes.menuItem}>

                  Contact
                  </Typography>
                </Link>
              </li>

              <li
                    class={`nav-item  ${
                      props.location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link class="nav-link" to="/projects">
                    <Typography variant="h6" className={classes.menuItem}>

                      Projects
                      </Typography>
                    </Link>

                  </li>
          </div>
        </div>
    </div>
    </Toolbar>
  );
}

export default withRouter(Navigation);