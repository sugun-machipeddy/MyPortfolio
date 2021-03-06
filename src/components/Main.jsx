import React from 'react';
import Home from './Home.jsx';
import About from './About.jsx';
import Work from './Work.jsx';
import Projects from './Projects.jsx';
import {Switch, Route} from 'react-router-dom';

const Main = () => (
<main>
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Aboutme' component={About}/>
    <Route exact path='/Work' component={Work}/>
    <Route exact path='/Projects' component={Projects}/>
  </Switch>
</main>
)

export default Main
