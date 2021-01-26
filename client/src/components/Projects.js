//https://reactjs.org/docs/lists-and-keys.html
import React from "react";
import SingleProject from './SingleProject.js';

function Projects() {
    const cribbageGame = {
      name: 'Multiplayer Cribbage Game',
      description: 'An online cribbage game for playing against your friends online, playing against the computer and checking yours and your friend\'s stats. This is a fullstack application using MongoDB, Express, Socket.IO, HTML, CSS, Node.js and JavaScript.',
      projLink: 'https://cribbage-online.herokuapp.com/',
      gitLink: 'https://github.com/nicholas-delaney/CribbageOnline/',
    };

    const platformer = {
      name: '2D Platformer Game / Level Editor',
      description: 'A classic 2D platformer game with a full level editor to make and play your own levels. Programmed using the ECS architectural pattern. This is a fullstack application using MongoDB, Express, Socket.IO, HTML, CSS, Node.js and JavaScript.',
      projLink: 'https://supermerle.herokuapp.com/',
      gitLink: 'https://github.com/nicholas-delaney/SidescrollerGame',
    };

    const blackjackRL = {
      name: 'Blackjack Reinforcement Learning AI',
      description: 'An app that trains an agent to play blackjack using the Reinforcement Learning Q-Learning algorithm. The agent learns to either "Hit" or "Stick" based on the current state: the sum of the agent\'s hand and whether or not the agent has an ace in their hand. The app lets you perform iterations of the Q-learning algorithm and displays   which action the agent thinks it should take at any given state. This project uses artificial intelligence, JavaScript, HTML, CSS, Node.js and Express.',
      projLink: 'https://black-jack-ai.herokuapp.com/',
      gitLink: 'https://github.com/nicholas-delaney/BlackjackRL/',
    };

    const sactfWebsite = {
      name: 'South Asian Covid TF Website (In Development)',
      description: 'A website I volunteered to make for the South Asian Covid Task Force. The goal of this website is to spread awareness of the task force and to provide a place where medical professionals can access multi-language covid-19 resources. I made this website using Pug, CSS, Node.js and Express. This website includes secure forms with client/server side validation and server side sanitization',
      projLink: 'https://pacific-fortress-14322.herokuapp.com/home',
      gitLink: 'https://github.com/nicholas-delaney/SouthAsianCovidTF-Website/tree/master',
    };

    const projects = [cribbageGame, platformer, blackjackRL, sactfWebsite];
    const projectComps = projects.map((project) =>
      <SingleProject key={project.name}
        projName={project.name}
        description={project.description}
        projLink={project.projLink}
        gitLink={project.gitLink}
      />
    );

    return(
      <div className='projects'>
        {projectComps}
      </div>
    );
}

export default Projects;