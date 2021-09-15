import React from 'react'
import CustomBtn from './CustomBtn'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingLeft: "20em"
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "pink"
        },
      
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   

                <Typography variant="h6" className={classes.menuItem}>
                   About
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Resume
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Projects 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Contact
                </Typography>
            </Toolbar>
    )
}

export default NavBar
