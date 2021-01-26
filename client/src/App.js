import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import './App.css';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <Router>
      <div className='navBar'>
        <input type='checkbox' id='nav-toggle' className='nav-toggle' />
        <h1 className='logo'>Nicholas Delaney</h1>
        <nav>
          <ul>
            <li>
              <NavLink 
                exact to='/' 
                activeStyle={{
                  fontWeight: "bold",
                  color: "#d65a31"
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/resume' 
                activeStyle={{
                  fontWeight: "bold",
                  color: "#d65a31"
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/projects' 
                activeStyle={{
                  fontWeight: "bold",
                  color: "#d65a31"
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/contact' 
                activeStyle={{
                  fontWeight: "bold",
                  color: "#d65a31"
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <label htmlFor='nav-toggle' className='nav-toggle-label'>
          <i className='fa fa-bars'></i>
        </label>
      </div>
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
