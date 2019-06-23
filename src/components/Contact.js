import React, { Component } from 'react'
import contactBg from '../assets/bridge.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="contact" style={{ backgroundImage: `Url(${contactBg})` }}>
        <h1>CONTACT ME!</h1>
        <h2>email@keithchia.com</h2>
        <div className="row-contact">
          <a
            href="https://twitter.com/wekkit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <i className="fab fa-twitter" aria-hidden="true" />
            <br />
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/keith-chia-26014795/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <i className="fab fa-linkedin" aria-hidden="true" />
            <br />
            LinkedIn
          </a>
          <a
            href="https://github.com/wekkit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <i className="fab fa-github" aria-hidden="true" />
            <br />
            Github
          </a>
        </div>
      </div>
    )
  }
}

export default Contact
