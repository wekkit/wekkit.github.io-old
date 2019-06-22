import React from 'react'
import { Link } from 'gatsby'

class NotFoundPage extends React.Component {
  render() {
    return (
      <main>
        <h1>Not Found!</h1>
        <Link to="/">Back to home</Link>
      </main>
    )
  }
}

export default NotFoundPage
