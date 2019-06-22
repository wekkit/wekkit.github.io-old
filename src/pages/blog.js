import React from 'react'
import { graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../styles/blog.module.css'
import dayjs from 'dayjs'

function transformAbsPath(path) {
  const splitBySlash = path.split('/')
  return '/' + splitBySlash[splitBySlash.length - 1].split('.')[0]
}

export default function Blog({ data: { allMdx } }) {
  return (
    <div className={styles.blog}>
      <ul>
        <AniLink fade to="/">
          Back to home
        </AniLink>
        {allMdx.nodes.map(node => {
          const {
            fileAbsolutePath,
            frontmatter: { title, date, spoiler }
          } = node
          return (
            <li key={title}>
              <AniLink paintDrip to={transformAbsPath(fileAbsolutePath)}>
                <h1>{title}</h1>
              </AniLink>
              <p>
                <span role="img" aria-label="Date written:">
                  ✏️⏰
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
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
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
    }
  }
`
