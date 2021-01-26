import React from "react";
import ContactInfo from './ContactInfo.js'
import headShot from '../images/headShot.jpg'
import '../App.css';

class Home extends React.Component {
    render() {
      return (
        <div className='content'>
          <div className='me'>
            <div className='imgContainer'>
              <img className='headShot' src={headShot} alt='Me.'></img>
            </div>
            <div className='myDetails'>
              <h4>Name:</h4>
              <p>Nicholas Delaney</p>
              <h4>Education</h4>
              <p>B.Sc. in Computer Science</p>
              <h4>Location:</h4>
              <p>St. John's, Newfoundland, Canada</p>
            </div>
          </div>
          <div className='homeMainSection'>
            <div className='about'>
              <h2>About Me</h2>
              <p>
              Thank you for visiting my personal portfolio. I am a recent graduate of the computer science
              program at Memorial University of Newfoundland. I am eager to start my career and grow as a
              Software Developer. Use the navigation bar above to explore a selection of my projects, 
              resume and contact information. Looking forward to connecting with you! 
              </p>
              <h5>Thank you,</h5>
              <h5>Nicholas Delaney</h5>
            </div>
            <div className='homeContact'>
              <ContactInfo />
            </div>
          </div>
        </div>
      );
    }
}

export default Home;