import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
// thr react router dom helps in navigating from one page to another
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Portfolios from './components/Portfolios';
import About from './components/About';
import Profile from './components/Profile';

function App() {
  return(
    // <Router>
    //   <>
    //     <Route exact path='/' component={<Home />} />
    //     <Routes>
    //       <Route path='/skills' component={<Skills />} />
    //       <Route path='/educations' component={<Educations />} />
    //       <Route path='/experiences' component={<Experiences />} />
    //       <Route path='/portfolios' component={<Portfolios />} />
    //     </Routes>
    //   </>
    // </Router>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Educations />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
