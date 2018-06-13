import React from 'react';
import '../App.css';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';

const headerStyle={
  fontSize:'40px',
};
const breakStyle={
  fontSize:'25px',
  margin: '4px'
};

const companyStyle={
  fontSize:'20px',
  margin: '0px'
};


export default class Projects extends React.Component{
  render(){
    return(
      <div>
        <Link to="/Resume"><FaAngleDoubleRight size={30} color="white" className="foo3"/></Link>
        <Link to="/Work"><FaAngleDoubleLeft size={30} color="white" className="foo4"/></Link>
      <div className="App-About">
        <p style={headerStyle}>Projects</p>

      <p style={breakStyle}><u>My Portfolio</u></p>
          <div id="slide2">
            I built this ite from scratch using only ReactJS library and nothing else. Working
            on this made me understand the many aspects of front-end development like layouts
            using Flexbox, routing, responsive design and writing browser specific code.
          </div> <br/>

        <p style={breakStyle}><u>Database Design</u></p>
        <div id="slide3">
          We modelled a hockey league intended for use by league managers and team owners.
          The database consisted of teams, players, coaches,games, venues and merchandise sold by each team.
          The project was presented via a web platform and was built on PHP. Oracle was used to query
          the database and make changes to the database. The user interface was built using HTML.
        </div> <br/>

      <p style={breakStyle}><u>RoboCode</u></p>
        <div id='slide4'>
          I trained a 3 layered neural network using Reinforced learning (Q learning) methods and
          back propogation algorithm. The neural network was implemented in a Robot battle tank and
          trained to learn the best move in any given state of the battle. The code was written entirely
          in JAVA.
        </div> <br/>

      <p style={breakStyle}><u>Pick-up stereoscope camera for the da vinci Surgical System</u></p>
        <div id="slide5">
          the da vinci surgical system has a single endoscopic camera that provides a stereoscopic view of The
          surgical field. We introduced an additional camera to the da Vinci system that can be picked up by one
          of its arms. The camera can then be manipulated using the arm and thus providing the surgeon with an additonal
          view.  We used OpenCV to calibrate and rectify the Stereo Camera.
        </div>

      </div>
      </div>
    );
  }
}
