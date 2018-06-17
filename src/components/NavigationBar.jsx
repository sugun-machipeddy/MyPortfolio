import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import {FaBars} from 'react-icons/lib/fa';
import {Link} from 'react-router-dom';
import Menu from './Menu.jsx';
import '../App.css';


export default class NavigationBar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown() {
    this.toggleMenu();
  }

  toggleMenu() {
    console.log('clicked');
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }

  render(){
    return (
      <div>
      <ResponsiveMenu className='App'
        menuOpenButton={<FaBars size={30} color="black" onClick={this.toggleMenu} className="small-menu-classname"/>}
        menuCloseButton={<FaBars size={30} color="black" onClick={this.toggleMenu} className="small-menu-classname"/>}
        changeMenuOn="800px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul className="NavigationBarStyle">
            <Link to="/" className="NavItemStyle">Home</Link>
            <Link to="/Aboutme" className="NavItemStyle">About me</Link>
            <Link to="/Work" className="NavItemStyle">Work</Link>
            <Link to="/Projects" className="NavItemStyle">Projects</Link>
            <a href="https://standardresume.co/SugunMachipeddy" className="NavItemStyle">Resume</a>
          </ul>
        }
      />
      <Menu handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}/>
      </div>
    );
  }
}
