import React from "react";

function ContactInfo() {
    return(
        <div className='contactInfo'>
            <h2>Contact information</h2>
            <ul className="contactListContainer">
            <a href="mailto:nicholasndelaney@gmail.com">
              <li> <i className="material-icons orange">email</i> nicholasndelaney@gmail.com</li>
            </a>
            <li><i className="material-icons orange">phone_iphone</i> (709) 640-3216</li>
            <li><i className="material-icons orange">home</i>St. John's, Newfoundland</li>
            <a href="https://github.com/nicholas-delaney">
              <li><i className='fab fa-git'></i>  https://github.com/nicholas-delaney</li>
            </a>
          </ul>
        </div>
    );
}

export default ContactInfo;