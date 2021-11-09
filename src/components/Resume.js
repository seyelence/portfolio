import React from 'react';


import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 


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
  

function Resume() {
    const sty = styles(); 

    return (
      <section id = "resume">
        <ThemeProvider theme = {theme}>

        <div className={sty.littleSpace}> 
          <h4 className='new-line'>SUMMARY </h4>
                Currently enrolled at the University of Massachusetts (Boston) for a bachelor’s degree in Computer Science B.S. I am a fast learner with excellent and fast communication skills.

          
             <h4 className='new-line'> PROFESSIONAL SKILLS </h4>
                Passionate, Hard-working, Flexible, Conscientious, Team player, Communicative, and very Courteous

               <h4 className='new-line'>  EDUCATION</h4>
                Everett High School, Everett MA 					August	2015 - June 2019
                University of Massachusetts - Boston MA 				September 2019 - Present
               <h4 className='new-line'> WORK EXPERIENCE </h4>
                Summer Worker in Everett 						July 2018 - August 2018
                The Mayor’s Summer Program is where teenagers are able to work by cleaning the city and helping various places within the city during the summer.
                Store Associate at Ocean State Job Lot 				April 2019 - April 2021
                Welcomed customers and assisted them by locating items or places they had in mind. Also stocked merchandise and has operated a cash register to process payments.
 
               <h4 className='new-line'> COMMUNITY SERVICE </h4>
                Teens in Everett  Against Substance Abuse (TEASA) 	     March 2016 - September 2019
                Community service group for teenagers in Everett that advocates against substance abuse. Participated in several projects such as the Expungement Act.
                Helping Hands at Work (HHW)				September 2015 - September 2018
                Community service group across several cities in my area that educated teenagers while helping our communities in some way such as teaching younger students or fundraising for poor families during the winter.

        </div>
        </ThemeProvider>
        </section>
        
        )
}
export default Resume;