import React, { Component } from 'react'
import illustratorIcon from '../../assets/icons/illustrator.svg'
import xdIcon from '../../assets/icons/xd.svg'
import aftereffectsIcon from '../../assets/icons/aftereffects.svg'
import premiereIcon from '../../assets/icons/premiere.svg'
import abletonIcon from '../../assets/icons/ableton.png'

class Icon extends Component {
  render() {
    return (
      <div className='skill-icon'>
        <i className={this.props.icon}></i>
        <p>{this.props.skill}</p>
      </div>
    )
  }
}

class Skills extends Component {
  render() {
    return (
      <div className='skills container-fluid' >
        <div className='row'>
        <div className='col-md-6'>
          <h1>DEVELOPMENT SKILLS</h1>
          <div className='skills-grid'>
            <Icon icon='devicon-git-plain colored' skill='Git' />
            <Icon icon='devicon-nodejs-plain colored' skill='Node' />
            <Icon icon='devicon-rails-plain colored' skill='Rails' />
            <Icon icon='devicon-react-plain colored' skill='React' />
            <Icon icon='devicon-angularjs-plain colored' skill='Angular 2' />
            <Icon icon='devicon-postgresql-plain colored' skill='PostgreSQL' />
            <Icon icon='devicon-mongodb-plain colored' skill='MongoDB' />
          </div>
        </div>
        <div className='col-md-6'>
          <h1>DESIGN SKILLS</h1>
          <div className='skills-grid'>
            <div className='skill-icon'>
              <img src={illustratorIcon} alt='' />
              <p>Illustrator</p>
            </div>
            <div className='skill-icon'>
              <img src={xdIcon} alt='' />
              <p>XD</p>
            </div>
            <Icon icon='devicon-bootstrap-plain colored' skill='Bootstrap' />
            <Icon icon='devicon-sass-plain colored' skill='Sass' />
            <div className='skill-icon'>
              <img src={aftereffectsIcon} alt='' />
              <p>After Effects</p>
            </div>
            <div className='skill-icon'>
              <img src={premiereIcon} alt='' />
              <p>Premiere</p>
            </div>
            <div className='skill-icon'>
              <img src={abletonIcon} alt='' />
              <p>Ableton Live</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Skills
