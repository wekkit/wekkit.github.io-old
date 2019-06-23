import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../styles/blog.module.css'
import dayjs from 'dayjs'
import Hero from '../components/Hero'
import pizza from '../assets/pizza.jpg'

function transformAbsPath(path) {
  const splitBySlash = path.split('/')
  return '/' + splitBySlash[splitBySlash.length - 1].split('.')[0]
}

export default function Blog({ data: { allMdx } }) {
  const [isMobile, useIsMobile] = useState(window.innerWidth < 576)

  const { totalCount } = allMdx

  const init = []
  for (let i = 0; i < totalCount; i++) {
    init.push(false)
  }
  const [postStates, setPostStates] = useState(init)
  useEffect(() => {
    postStates.forEach((_, i) => {
      setTimeout(() => {
        setPostStates(postStates.map((e, j) => (j <= i ? true : false)))
      }, 100 * i)
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () =>
      useIsMobile(window.innerWidth < 576)
    )
  }, [])

  return (
    <div className={styles.blog}>
      <div>
        <Hero
          heading="The Blog"
          bg={pizza}
          hideSubs
          width={isMobile ? '100vw' : '50vw'}
          position={isMobile ? 'initial' : 'fixed'}
        />
        {!isMobile && <div style={{ width: '50vw' }}></div>}
        <AniLink className={'btn ' + styles.homelink} fade to="/">
          <span role="img" aria-label="Back">
            ◀️
          </span>{' '}
          Back to Home
        </AniLink>
      </div>
      <ul>
        {allMdx.nodes.map((node, i) => {
          const {
            fileAbsolutePath,
            frontmatter: { title, date, spoiler }
          } = node
          return (
            <li
              key={title}
              className={`${styles.post} ${
                postStates[i] ? styles.on : styles.off
              }`}
            >
              <AniLink
                paintDrip
                color="white"
                to={transformAbsPath(fileAbsolutePath)}
              >
                <h1>{title}</h1>
              </AniLink>
              <p>
                <span role="img" aria-label="Date written:">
                  ✏️📅
                </span>
                : {dayjs(date).format('MMMM D, YYYY')}
              </p>
              <p>{spoiler}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        timeToRead
        headings {
          value
        }
        frontmatter {
          title
          spoiler
          date
        }
        fileAbsolutePath
      }
      totalCount
    }
  }
`
