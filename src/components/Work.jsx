import React from 'react';
import '../App.css';
import {RightAlign} from '../Theme/styles.js';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';

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
  render(){
    return(
      <div>
        <Link to="/Projects"><FaAngleDoubleRight size={30} color="white" className="foo3"/></Link>
        <Link to="/Aboutme"><FaAngleDoubleLeft size={30} color="white" className="foo4"/></Link>
      <div className="App-About">
      <p style={headerStyle} >Work Experience</p>
      <p style={breakStyle}><u>Associate Software Engineer</u> (08/2016-07/2017)</p>
      <p style={companyStyle}>Robert Bosch Enginnering and Business Solutions, INDIA.</p>
      <ul id="slide">
        <li>Built custom Linux distributions using YOCTO Project.</li>
        <li>Familiarized myself with Open Embedded Build Automation framework.</li>
        <li>practiced Continuous Integration(CI) and DevOps.</li>
        <li>I was the lead for Generation3 SABRE iMX6 series of boards and manged the weekly releases of the distribution</li>
        <li> My other resposnibiites included delivering supplier releases and was second in charge of provoding Hot-fixes.</li>
        <li>I played a crucial role in Automating the smoke testing of boards using USB Cleware switches.</li>
      </ul>

      <p style={breakStyle}><u>Research Intern</u> (01/2016-04/2016)</p>
      <p style={companyStyle}>The University of Bologna, ITALY.</p>
      <ul id='slide1'>
        <li>Worked int the area of Partial discharges in magnet wires.</li>
        <li>The work was aimed at realizing the More Electrical Aircraft concept (MEA) concept which aims to replace conventional hydraulic and pneumatic parts with inverter fed actuators.</li>
        <li>We investigated the isnualtion thickness required for wires of different thickness for safe operation of aircrafts.</li>
      </ul>
    </div>
  </div>
    );
  }
}
