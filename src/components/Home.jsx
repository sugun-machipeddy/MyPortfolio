import React from 'react';
import {FaAngleDoubleRight} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import '../App.css';




export default  class Home extends React.Component{
  componentDidMount(){
  window.scrollTo(0,0);
  }
  render(){
    return(
      <div>

      <div className="App">
        <p className="App-header">Hello! I'm Sugun Machipeddy</p> <br/>
        <p className="App-title">Engineer | Software Developer</p>
        <p className="App-title">Master of Engineering in Electrical and Computer Engineering</p>
        <p className="App-title">The University of British Columbia</p> <br/>
        <p><a href="https://www.linkedin.com/in/sugun-machipeddy/" target="_blank" rel="noopener noreferrer"><img src={require('../Images/Linkedin2.png')} alt='linkedin' align='middle' height="40" width="40"  className="foo"/></a>
        <a href="https://www.instagram.com/sugun.machipeddy/" target="_blank" rel="noopener noreferrer"><img src={require('../Images/instagram2.png')} alt='instagram' align='middle' height="36" width="36" className="foo"/></a>
        <a href="https://github.com/sugun-machipeddy" target="_blank" rel="noopener noreferrer"><img src={require('../Images/github2.png')} alt='git' align='middle' height="40" width="40" className="foo"/></a></p>
        <Link to="/Aboutme" id="foo2"><FaAngleDoubleRight size={30} color="black"/></Link>
    </div>
      </div>
    );
  }
}
