import React, { Component } from 'react'
import Cv from '../../assets/keith_chia_cv.pdf'

class CV extends Component {
  render() {
    return (
      <div>
        <a href={Cv} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>View my CV</a>
      </div>
    )
  }
}

export default CV
