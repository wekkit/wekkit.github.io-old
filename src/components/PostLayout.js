import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../styles/postlayout.module.css'

export default ({ children }) => (
  <div className={styles.postLayout}>
    <AniLink className={'btn ' + styles.backBtn} fade to="/blog">
      <span role="img" aria-label="Back">
        ◀️
      </span>{' '}
      Back to Index
    </AniLink>
    <div>{children}</div>
  </div>
)
