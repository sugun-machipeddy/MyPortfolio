import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/lib/fa';

export default class Menu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutMenu"
           onMouseDown={this.props.handleMouseDown}
           className={visibility}>
           <FaBars size={30} color="black" onClick={this.toggleMenu} className="small-menu-classname"/>
           <Link to="/" className="Menuitem">Home</Link>
           <Link to="/Aboutme" className="Menuitem">About me</Link>
           <Link to="/Work" className="Menuitem">Work</Link>
           <Link to="/Projects" className="Menuitem">Projects</Link>
           <Link to="/Resume" className="Menuitem">Resume</Link>
      </div>
    );
  }
}
