import React from 'react';
import '../App.css';
import {RightAlign} from '../Theme/styles.js';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const headerStyle={
  fontSize:'40px',
};
const breakStyle={
  fontSize:'25px',
  margin: '0px'
};

const companyStyle={
  fontSize:'20px',
  margin: '0px'
};

export default class Work extends React.Component{
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
        <Link to="/Projects"><FaAngleDoubleRight size={30} color="white" className="foo3"/></Link>
        <Link to="/Aboutme"><FaAngleDoubleLeft size={30} color="white" className="foo4"/></Link>
      <div className="App-About">
      <p style={headerStyle} >Work Experience</p>
      <p style={breakStyle}><u>Associate Software Engineer</u> (08/2016-07/2017)</p>
      <p style={companyStyle}>Robert Bosch Enginnering and Business Solutions, INDIA.</p>
      <ul id="slide">
        <li>Built custom Linux distributions using the reference distribution ‘POKY’ of YOCTO Project.</li>
        <li>Familiarized myself with Open Embedded Build Automation framework (BitBake and OpenEmbedded Core).</li>
        <li>Practiced Continuous Integration(CI) and DevOps.</li>
        <li>Used Jenkins and Bamboo to automate builds and tasks.</li>
        <li>I was the lead for Generation3 NXP SABRE iMX6 series of SOC’s and managed the weekly releases of the distribution.</li>
        <li>My other responsibilities included delivering supplier releases and was second in charge of providing Hot-fixes.</li>
        <li>I played a crucial role in Automating the smoke testing of boards using USB Cleware switches.</li>
      </ul>

      <p style={breakStyle}><u>Research Intern</u> (01/2016-04/2016)</p>
      <p style={companyStyle}>The University of Bologna, ITALY.</p>
      <ul id='slide1'>
        <li>Worked in the area of Partial discharges in magnet wires.</li>
        <li>The work was aimed at realizing the More Electrical Aircraft concept (MEA) concept which seeks to replace the conventional hydraulic and pneumatic parts with electrical inverter fed actuators.</li>
        <li>We investigated the insulation thickness required for wires of different thickness for the safe operation of an aircraft.</li>
      </ul>
    </div>
    </ReactCSSTransitionGroup>
  </div>
    );
  }
}
