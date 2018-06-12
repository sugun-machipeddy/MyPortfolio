import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import '../App.css';


export default  class Home extends React.Component{
  render(){
    return(
      <div className="App">
        <p className="App-header">Hello! I'm Sugun Machipeddy</p> <br/>
        <p className="App-title">Engineer | Software Developer</p>
        <p className="App-title">Master of Engineering in Electrical and Computer Engineering</p>
        <p className="App-title">The University of British Columbia</p> <br/>
        <p><a href="https://www.linkedin.com/in/sugun-machipeddy/" target="_blank"><img src={require('../Images/Linkedin.png')} alt='linkedin' align='middle' height="30" width="30"  className="foo"/></a>
        <a href="https://www.instagram.com/sugun.machipeddy/" target="_blank"><img src={require('../Images/instagram.png')} alt='instagram' align='middle' height="26" width="26" className="foo"/></a> </p>
        <Link to="/Aboutme" className="foo2"><FaAngleDoubleRight size={30} color="white" id="foo2"/></Link>
    </div>
    );
  }
}
