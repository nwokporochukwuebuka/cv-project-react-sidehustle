import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6 className='mt-bottom'>
              <strong>ABOUT ME</strong>
            </h6>
            <p className='grey-text'>
            Goal-oriented software engineer adept at contributing to highly collaborative work environment and finding solutions. Knowledgeable in user interface, testing and maintenance of web systems, APIs, third party integrations. True team player with strengths in adaptability and accuracy
            </p>
          </div>
          <div className='card-action'>
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className='row mt'>
              <div className='col s12 m6 l6 xl6'>
                <p><strong>Address: </strong>Karmo, Abuja</p>
                <p><strong>Email: </strong>nwokporochukwuebuka@gmail.com</p>
                <p><strong>Phone: </strong>(+234) 0903 251 3401</p>
                
              </div>

              <div className='s12 m6 l6 xl6'>
                <p><strong>Nationality: </strong>Nigerian</p>
                <p><strong>Gender: </strong>Male</p>
                <p><strong>GitHub: </strong>https://www.github.com/Chukwuebuka2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
