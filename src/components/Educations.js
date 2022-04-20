import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6><strong>EDUCATIONS</strong></h6>
            <table className='striped'>
              <thead>
                <tr>
                  <th>
                    Certificate
                  </th>
                  <th>
                    Date
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6>Mechatronics Engineering</h6>
                    <p>Federal University of Technology, Owerri</p>
                  </td>
                  <td>
                    2016 - 2022
                  </td>
                  <td>
                    <Link to='#' className='btn blue lighten-2'>View</Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>Computer Science</h6>
                    <p>University of the People</p>
                  </td>
                  <td>
                    2021 - 2025
                  </td>
                  <td>
                    <Link to='#' className='btn blue lighten-2'>View</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
