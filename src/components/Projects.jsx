import React from 'react';
import '../App.css';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const headerStyle={
  fontSize:'40px',
};
const breakStyle={
  fontSize:'25px',
  margin: '4px'
};


export default class Projects extends React.Component{
  componentDidMount(){
  window.scrollTo(0,0);
  }
  render(){
    return(
      <div>
        <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1200}
        transitionEnterTimeout={1200}
        transitionLeaveTimeout={400}
        transitionName='SlideIn'
      >
        <a href="https://standardresume.co/SugunMachipeddy"><FaAngleDoubleRight size={30} color="black" className="foo3"/></a>
        <Link to="/Work"><FaAngleDoubleLeft size={30} color="black" className="foo4"/></Link>
      <div className="App-About">
        <p style={headerStyle}>Projects</p>

      <p style={breakStyle}><u><a href="https://github.com/sugun-machipeddy/MyPortfolio" target="_blank" rel="noopener noreferrer">My Portfolio</a></u></p>
          <div id="slide2">
            I built this site from scratch using ReactJS and hosted it using AWS S3 and CloudFront.
            Working on this made me understand many aspects like layouts using Flexbox, hot reloading, routing, navigation and responsive design.
          </div> <br/>

          <p style={breakStyle}><u><a href="https://github.com/sugun-machipeddy/Repo/tree/master/Neural_Networks/project" target="_blank" rel="noopener noreferrer">RoboCode</a></u></p>
            <div id='slide3'>
              I implemented a Neural Network in a Robot battle tank to learn the optimal state-action policy. The Neural Network was trained using Reinforcement learning (Q-learning) and Back-propagation alogorithm
              as the problem can be modelled as a finite Markov decision process. The Action value function (Q-function) returns the maximum expected reward for any state-action pair and the values are stored in a Q-table.
              We start with some randomly initialized Q-table and update the table in the learning process. The final learnt Q-table is the optimal solution. The code was written entirely in Java.
            </div> <br/>

        <p style={breakStyle}><u><a href="https://github.com/sugun-machipeddy/DatabaseDesign" target="_blank" rel="noopener noreferrer">Database Design</a></u></p>
        <div id="slide4">
          We modelled a hockey league intended for use by league managers and team owners.
          The database consists of teams, players, coaches, games, venues and merchandise sold by each team.
          The project was presented via a web platform and was built on PHP. The user interface was built using HTML and Oracle was used to query and update the database.
          I was responsible for creating the database and writing SQL queries.
        </div> <br/>



      <p style={breakStyle}><u><a href="https://github.com/sugun-machipeddy/Repo/tree/master/Robotics_code" target="_blank" rel="noopener noreferrer">Pick-up stereoscope camera for the da vinci Surgical System</a></u></p>
        <div id="slide5">
          We introduced an additional camera to the da Vinci Surgical System that can be picked up by one of its arms and manipulated to provide the surgeon with an additional view of the surgical field and also offer better depth perception.
          We designed a pick up probe and obtained a real time feed from the camera. I used OpenCV library in Pyhton to calibrate and rectify the Stereo Camera. I also made use of the methods available in OpenCV to localize the tool tip coordinates
          required for triangulation and computed the coordinate transformation matrix from the camera frame to the tool tip frame.
        </div>

      </div>
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}
