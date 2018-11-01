import React, { Component } from 'react';
import LandingPage from './components/landingPage'
import WorkPage from './components/workPage';
import ProjectsPage from './components/projectsPage';
import ContactsPage from './components/contactsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage/>
        <WorkPage/>
        <ProjectsPage/>
        <ContactsPage/>
      </div>
    );
  }
}

export default App;
