import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <>
        <nav className='light-blue darken-4'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <Link to='/' className='brand-logo'>
                        MyCV
                    </Link>
                    <Link to='/' data-target='mobile-sidenav-menu' className='sidenav-trigger'> 
                        <i className='material-icons'>menu</i>
                    </Link>
                    <ul className='right hide-on-med-and-down'>
                        <li>
                            <Link to='/'>
                                <i className='fas fa-home'>Home</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/skills'>
                                <i className='fas fa-copy'>Skills</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/experiences'>
                                <i className='fas fa-id-badge'>Experiences</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/education'>
                                <i className='fas fa-graduation-cap'>Education</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile'>
                                <i className='fas fa-address-card'>Profile</i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        <ul className='sidenav' id='mobile-sidenav-menu'>
            <li>
                <Link to='/'>
                    <i className='fas fa-home'>Home</i>
                </Link>
            </li>
            <li>
                <Link to='/skills'>
                    <i className='fas fa-copy'>Skills</i>
                </Link>
            </li>
            <li>
                <Link to='/experiences'>
                    <i className='fas fa-id-badge'>Experiences</i>
                </Link>
            </li>
            <li>
                <Link to='/education'>
                    <i className='fas fa-graduation-cap'>Education</i>
                </Link>
            </li>
            <li>
                <Link to='/portfolio'>
                    <i className='fas fa-address-card'>Portfolios</i>
                </Link>
            </li>
         </ul>
    </>
    );
  }
}
export default Navbar;