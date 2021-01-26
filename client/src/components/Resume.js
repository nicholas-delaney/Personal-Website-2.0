import React from "react";

function Resume() {
  return (
    <div className='resume'>

      <div className='education'>
        <h1>Education</h1>
        <p>Memorial University of Newfoundland</p>
        <ul>
          <li>Bachelor of Science Major in Computer Science</li>
        </ul>
      </div>

      <div className='skills'>
        <h1>Skills</h1>
        <div className='skillFlex'>
          <div className='skillsColumn'>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>Database Technologies</li>
              <li>Mongoose (ORMs)</li>
              <li>Pug (View Engine)</li>
              <li>Express</li>
              <li>Socket.IO</li>
              <li>Java</li>
              <li>C/C#/C++</li>
              <li>Python</li>
              <li>Matlab</li>
            </ul>
          </div>
          <div className='skillsColumn'>
            <ul>
              <li>Computer vision techniques</li>
              <li>Web development</li>
              <li>Intelligent systems / artificial intelligence</li>
              <li>Object Oriented Programming</li>
              <li>Entity-Component-System architectural pattern</li>
              <li>Model-View-Controller design pattern</li>
              <li>Experience creating entire fullstack applications (see projects)</li> 
              <li>Multiplayer games (see Cribbage Online in projects)</li>
              <li>Confident problem solver</li>
              <li>Excellent verbal and written communication skills</li>
              <li>Team player</li> 
              <li>Accuracy and attention to detail</li>
              <li>Mathematical aptitude</li>
              <li>Excellent organisational and time management skills</li>
              <li>Friendly and easy to get along with!</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='workHistory'>
        <h1>Work History</h1>
        <div className='wHHeading'>
          <ul>
            <li>Corner Brook Pulp & Paper</li>
            <li>Summer Student</li>
            <li>2014-2019</li>
          </ul>
        </div>
        <div className='workInfo'>
          <div className='workContact'>
            <h5>Work Contact:</h5>
            <ul>
              <li><i className="material-icons white">phone</i>(709) 637-3000</li>
              <li><i className="material-icons white">location_on</i>1 Mill Rd.</li>
              <li><i className="material-icons white">location_city</i>Corner Brook, NL</li>
            </ul>
          </div>
          <div className='workDuties'>
            <h5>Main Duties:</h5>
            <ul>
              <li>Operated elevators on large shipping boats</li>
              <li>Performed various labour jobs</li>
              <li>Worked as Confined Space Attendent</li>
            </ul>  
          </div>
        </div>
      </div>

      <div className='hobbiesInterests'>
        <h1>Hobbies & Interests</h1>
        <ul>
          <li>Listening to and playing music</li>
          <li>Video and card games</li>
          <li>Painting and drawing</li>
          <li>Outdoor activities and sports</li>
        </ul>
      </div>

    </div>
  );
}

export default Resume;