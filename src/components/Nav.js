import React from 'react'
import { Link } from 'react-scroll'
import styles from '../styles/nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link
        activeClass="active"
        className="btn btn-primary"
        to="portfolio"
        smooth={true}
        offset={-20}
        duration={500}
      >
        Portfolio
      </Link>
      <Link
        activeClass="active"
        className="btn btn-primary"
        to="resume"
        smooth={true}
        offset={-20}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass="active"
        className="btn btn-primary"
        to="contact"
        smooth={true}
        offset={-20}
        duration={500}
      >
        Contact
      </Link>
    </div>
  )
}
