import React, { Component } from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactBg from "../assets/bridge.jpg";

class Contact extends Component {
  render() {
    return (
      <div
        className="contact container-fluid"
        style={{ backgroundImage: `Url(${contactBg})` }}
      >
        <h1>CONTACT ME!</h1>
        <h2>email@keithchia.com</h2>
        <div className="row-contact">
          <a
            href="https://twitter.com/wekkit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <FontAwesomeIcon
              style={{ paddingBottom: 5 }}
              size="3x"
              icon={faTwitter}
            />
            <br />
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/keith-chia-26014795/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <FontAwesomeIcon
              style={{ paddingBottom: 5 }}
              size="3x"
              icon={faLinkedin}
            />
            <br />
            LinkedIn
          </a>
          <a
            href="https://github.com/wekkit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-contact"
          >
            <FontAwesomeIcon
              style={{ paddingBottom: 5 }}
              size="3x"
              icon={faGithub}
            />
            <br />
            Github
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
