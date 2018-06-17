import React from 'react';
import {RevealP, RevealL} from '../Theme/styles.js';
import WhenInView from './WhenInView.jsx';
import '../App.css';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const headerStyle={
  fontSize:'40px',
};


export default class About extends React.Component{
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
        <Link to="/Work"><FaAngleDoubleRight size={30} color="black" className="foo3"/></Link>
        <Link to="/"><FaAngleDoubleLeft size={30} color="black" className="foo4"/></Link>
      <div className="App-About">
        <p style={headerStyle}>About Me</p>
        <img src={require('../Images/DSC03197.JPG')} alt='instagram' align='middle' height="150" width="150" className="image-radius"/>
        <WhenInView>
          {({isInView}) =>
          <RevealP hide={!isInView}>
            I'm into all things Engineering, Electrical and Software. I like to immerse myself in the world of technology and motion pictures.
          </RevealP>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealL hide={!isInView}>
            Currently, I am pursuing my <mark>Master’s in Electrical and Computer Engineering at The University of British Columbia</mark>, Vancouver.
            Over the years, I learnt that I can teach myself pretty much anything and presently am trying my hands at Machine Learning and Front-End development.
            I am adept at coding in <mark>Python, C++ and Java</mark>.
          </RevealL>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealP hide={!isInView}>
            Previously, I worked as an <mark>Associate Software Engineer</mark> at <mark>Robert Bosch Engineering and Business Solutions, India</mark>.
            I was into <mark>Continuous Integration (CI)</mark> and <mark>practised DevOps</mark>.
            we built custom Linux distributions for Automotive Infotainment Systems using <a href="https://www.yoctoproject.org/" target="_blank" rel="noopener noreferrer"><u>YOCTO Project</u></a> and I was the lead for Generation3 <a href="https://www.nxp.com/support/developer-resources/hardware-development-tools/sabre-development-system/sabre-for-automotive-infotainment-based-on-the-i.mx-6-series:RDIMX6SABREAUTO" target="_blank" rel="noopener noreferrer"><u>SABRE NXP iMX6 series of SOC’s</u></a>.
          </RevealP>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealL hide={!isInView}>
            I also have a bachelor’s degree in Electrical and Electronics Engineering.
            As an undergraduate, I was sponsored to spend my final semester as an exchange student at The University of Bologna, Italy.
            I even co-authored a <mark>research paper</mark> titled <a href="https://ieeexplore.ieee.org/document/7785627/" target="_blank" rel="noopener noreferrer"><u>"Modelling partial discharge inception in magnet wires at different altitudes"</u></a>.
          </RevealL>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealP hide={!isInView}>
            I like to spend my free time either reading or watching TV series. I also enjoy music and love travelling.
          </RevealP>}
        </WhenInView>

        <p>I beleive that all dreams can come true if we have the courage to pursue them. <br/> <br/></p>
        <p> Get in Touch! <br/> If you have any questions, feel free to drop in a message.</p>
        <form method="POST" action="https://formspree.io/sugun.machipeddy@gmail.com">
          <input type="email" name="email" placeholder="Your email" size="32"></input>
          <br/>
          <textarea name="message" placeholder="Your message" rows="9" cols="33"></textarea>
          <br/>
          <button className="foo" type="submit"><img src={require('../Images/Send2.png')} alt='send' align='middle' height="40" width="40" /></button>
        </form>
        </div>
        </ReactCSSTransitionGroup>
    </div>
    );
  }
}
