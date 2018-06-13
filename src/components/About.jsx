import React from 'react';
import {RevealP, RevealL} from '../Theme/styles.js';
import WhenInView from './WhenInView.jsx';
import '../App.css';
const headerStyle={
  fontSize:'40px',
};
const breakStyle={
  fontSize:'25px',
};

export default class About extends React.Component{
  render(){
    return(
      <div className="App-About">
        <p style={headerStyle}>About Me</p>
        <img src={require('../Images/DSC03197.JPG')} alt='instagram' align='middle' height="180" width="180" className="image-radius"/>
        <WhenInView>
          {({isInView}) =>
          <RevealP hide={!isInView}>
            I'm into all things engineering, Electrical and Software. I like to immerse myself into
            the world of technology and motion pictures. I have a Bachelor's degree in Electrical and
            Electronics Engineering from SASTRA University, India. As an undergraduate, I was sponsored
            to spend a semester as an exchange student at The University of Bologna,Italy and even co-authored
            a research paper titled "Modelling partial discharge inception in magnet wires at different altitudes"
            </RevealP>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealL hide={!isInView}>
            Then, I worked as an Associate Software Engineer at Robert Bosch Engineering and Business Solutions, India.
            I was into Continous Integration (CI) and we built custom Linux distributions for automotive infotainment
            systems using YOCTO Project. I was the lead for Generation3 SABRE iMX6 series of boards. We also practiced
            devOps and automated the complete process from building to deployment to testing.
          </RevealL>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealP hide={!isInView}>
            Currently, I am pursuing my Masters in Electrical and Electronics Engineering at The university of British Columbia.
            Over the years, i learnt that I can teach myself pretty much anything and presently am trying my hands at machine learning
            and front-end develoment. I am adept at coding in python, C++ and java.
          </RevealP>}
        </WhenInView>

        <WhenInView>
          {({isInView}) =>
          <RevealL hide={!isInView}>
            I like to spend my free time either reading or watching TV series. I also enjoy music and love travelling.
          </RevealL>}
        </WhenInView>

        <p>I beleive that all dreams can come true if we have the courage to pursue them. <br/> <br/></p>
        <p> Intersetd in forging a friendship? <br/> Contact Me</p>
        <form method="POST" action="https://formspree.io/sugun.machipeddy@gmail.com">
          <input type="email" name="email" placeholder="Your email" size="32"></input>
          <br/>
          <textarea name="message" placeholder="Your message" rows="8" cols="33"></textarea>
          <br/>
          <button className="foo" type="submit"><img src={require('../Images/transparent.png')} alt='send' align='middle' height="40" width="40" /></button>
        </form>
          </div>
    );
  }
}
