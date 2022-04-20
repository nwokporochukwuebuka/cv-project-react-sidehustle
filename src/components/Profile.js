import React, { Component } from 'react';
// import Img from '../me.jpg'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          {/* <div className='card-image'>
            <img className='activator' src={Img} alt='John Doe' width='500'/>
            <Link className='btn-floating halfway-fab waves-effect waves-light red'>
              <i className='material-icons activator'>more_vert</i>
            </Link>
          </div> */}
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>
              Chukwuebuka
            </span>
            <p> Full Stack Developer</p>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>
              Follow me
            </span>
            <p className='flex-container'>
              <i className='fab fa-facebook-f grey-text text-darken-4 social-style'></i>
              <i className='fab fa-twitter grey-text text-darken-4 social-style'></i>
              <i className='fab fa-google-plus-g grey-text text-darken-4 social-style'></i>
              <i className='fab fa-instagram grey-text text-darken-4 social-style'></i>
              <i className='fab fa-pintrest grey-text text-darken-4 social-style'></i>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
