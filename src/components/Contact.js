import React, { Component } from 'react'
import contactBg from '../assets/bridge.jpg'

class Contact extends Component {
  render() {
    return (
      <div className='contact container-fluid' style={{backgroundImage:`Url(${contactBg})`}}>
        <h1>CONTACT ME!</h1>
        <h2>email@keithchia.com<br/>
        +65 98374211</h2>
        <div className='row-contact'>
            <a href='https://www.facebook.com/profile.php?id=732789218' target='_blank' className='btn btn-contact'>
              <i className="fa fa-facebook" aria-hidden="true"></i><br/>
              Facebook
            </a>
            <a href='https://twitter.com/wekkit' target='_blank' className='btn btn-contact'>
              <i className="fa fa-twitter" aria-hidden="true"></i><br/>
              Twitter
            </a>
            <a href='https://www.linkedin.com/in/keith-chia-26014795/' target='_blank' className='btn btn-contact'>
              <i className="fa fa-linkedin" aria-hidden="true"></i><br/>
              LinkedIn
            </a>
            <a href='https://github.com/wekkit' target='_blank' className='btn btn-contact'>
              <i className="fa fa-github" aria-hidden="true"></i><br/>
              Github
            </a>
        </div>
      </div>
    )
  }
}

export default Contact
