import React, { Component } from "react"
import illustratorIcon from "../../assets/icons/illustrator.svg"
import xdIcon from "../../assets/icons/xd.svg"
import aftereffectsIcon from "../../assets/icons/aftereffects.svg"
import premiereIcon from "../../assets/icons/premiere.svg"
import abletonIcon from "../../assets/icons/ableton.png"
import firebaseIcon from "../../assets/icons/firebase.svg"
import styles from "./resume.module.css"

function Icon(props) {
  const { icon, skill } = props
  return (
    <div className="skill-icon">
      <span className={icon}></span>
      <p>{skill}</p>
    </div>
  )
}

class Skills extends Component {
  render() {
    return (
      <div className={`${styles.skills} skills`}>
        <div>
          <h1>DEVELOPMENT SKILLS</h1>
          <div className="skills-grid">
            <Icon icon="devicons devicons-nodejs" skill="Node" />
            <Icon icon="devicons devicons-react" skill="React" />
            <Icon icon="devicons devicons-angular" skill="Angular 4" />
            <div className="skill-icon">
              <img src={firebaseIcon} alt="" />
              <p>Firebase</p>
            </div>
            <Icon icon="devicons devicons-postgresql" skill="PostgreSQL" />
            <Icon icon="devicons devicons-mongodb" skill="MongoDB" />
          </div>
        </div>
        <div>
          <h1>DESIGN SKILLS</h1>
          <div className="skills-grid">
            <div className="skill-icon">
              <img src={illustratorIcon} alt="" />
              <p>Illustrator</p>
            </div>
            <div className="skill-icon">
              <img src={xdIcon} alt="" />
              <p>XD</p>
            </div>
            <Icon icon="devicons devicons-bootstrap" skill="Bootstrap" />
            <Icon icon="devicons devicons-sass" skill="Sass" />
            <div className="skill-icon">
              <img src={aftereffectsIcon} alt="" />
              <p>After Effects</p>
            </div>
            <div className="skill-icon">
              <img src={premiereIcon} alt="" />
              <p>Premiere</p>
            </div>
            <div className="skill-icon">
              <img src={abletonIcon} alt="" />
              <p>Ableton Live</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
