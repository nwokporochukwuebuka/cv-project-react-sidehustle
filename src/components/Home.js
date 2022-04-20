import React, { Component } from 'react';
import Skills from './Skills';
import Experiences from './Experiences';
import Educations from './Educations';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';

export default class Home extends Component {
  render() {
    return (
      
      // <div className='home'>
      //   <Navbar />
      //   This is the home page
      // </div>
      <section>
          <Navbar/>
          <div className='container'>
              <div className='row'>
                  <div className='col s12 m4 l3'>
                   <Profile />
                  </div>
                  <div className='col s12 m8 l9'>
                    <About />
                    <Skills />
                    <Experiences />
                    <Educations />
                    <Profile /> 
                  </div>
              </div>
          </div>
      </section>
    )
  }
}