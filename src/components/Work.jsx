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
        <Link to="/Projects"><FaAngleDoubleRight size={30} color="black" className="foo3"/></Link>
        <Link to="/Aboutme"><FaAngleDoubleLeft size={30} color="black" className="foo4"/></Link>
      <div className="App-About">
      <p style={headerStyle} >Work Experience</p>
      <p style={breakStyle}><u>Associate Software Engineer</u> (08/2016-07/2017)</p>
      <p style={companyStyle}>Robert Bosch Enginnering and Business Solutions, INDIA.</p>
      <ul id="slide">
        <li>Built custom Linux distributions using the reference distribution <mark>‘POKY’</mark> of <mark>YOCTO Project</mark>.</li>
        <li>Familiarized myself with Open Embedded Build Automation framework <mark>(BitBake and OpenEmbedded Core)</mark>.</li>
        <li>Practiced <mark>Continuous Integration(CI)</mark> and <mark>DevOps</mark>.</li>
        <li>Used <mark>Jenkins</mark> and <mark>Bamboo</mark> to automate builds and tasks.</li>
        <li>I was the <mark>lead</mark> for Generation3 <mark>NXP SABRE iMX6</mark> series of SOC’s and managed the <mark>weekly releases</mark> of the distribution.</li>
        <li>My other responsibilities included delivering <mark>supplier releases</mark> and was second in charge of providing <mark>Hot-fixes</mark>.</li>
        <li>I played a crucial role in Automating the smoke testing of boards using USB Cleware switches.</li>
      </ul>

      <p style={breakStyle}><u>Research Intern</u> (01/2016-04/2016)</p>
      <p style={companyStyle}>The University of Bologna, ITALY.</p>
      <ul id='slide1'>
        <li>Worked in the area of <mark>Partial discharges</mark> in High Voltage Engineering.</li>
        <li>The work was aimed at realizing the <mark>More Electrical Aircraft concept (MEA)</mark> concept which seeks to replace the conventional hydraulic and pneumatic parts with <mark>electrical inverter fed actuators</mark>.</li>
        <li>We investigated the insulation thickness required for wires of different thickness for the safe operation of an aircraft.</li>
      </ul>
    </div>
    </ReactCSSTransitionGroup>
  </div>
    );
  }
}
