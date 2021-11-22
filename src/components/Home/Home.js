import React from "react";
import './Home.css'
import GitHubIcon from '@material-ui/icons/GitHub'
<<<<<<< HEAD
=======
import LinkedInIcon from '@material-ui/icons/LinkedIn'
>>>>>>> 30f5db77999f1e486feb184b815fddd91d01b61b


function Home() {

  return (
    <section id = "index">
    <div>
        <h1 className = "title"> Hello World! </h1>
          <section className = "desc"> My name is Thamany Valbrune, and I am a junior at University of Massachusetts- Boston. 
        My interests are within web development and cybersecurity. 
        </section>
        <br/>
      </div>

      <a href="https://docs.google.com/document/d/1klK3_09XPRXgxOW7n68vuHkBuAPw00khlgJg_xCPlCM/edit?usp=sharing">
            <span type='button' className='btn btn-border'>
              Resume
            </span>
          </a>
              <a href="https://github.com/seyelence" aria-label='github' className='link icon'>
                <GitHubIcon />
              </a>

      </section>
        );   
}

export default Home;