import React, { useState, useEffect } from 'react'
import hero from '../assets/hero.jpg'

export default function Hero(props) {
  const {
    heading = 'Keith Chia',
    bg = hero,
    hideSubs = false,
    width = '100vw',
    position = 'initial'
  } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setOpen(true), 0)
  }, [])

  return (
    <div className="header" style={{ width, position }}>
      <div
        onClick={() => {
          setOpen(false)
          setTimeout(() => setOpen(true), 1500)
        }}
        className={`bgWrapper ${open ? 'bgWrapper-open' : 'bgWrapper-closed'}`}
        style={{ backgroundImage: `Url(${bg})` }}
      />
      <h1>{heading}</h1>
      {!hideSubs && (
        <div className="trio">
          <p className="lead red">Developer.</p>
          <p className="lead blue">Designer.</p>
          <p className="lead green">Builder.</p>
        </div>
      )}
    </div>
  )
}
