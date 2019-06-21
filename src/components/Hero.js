import React, { useState, useEffect } from 'react'
import hero from '../assets/hero.jpg'

export default function Hero() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setOpen(true), 0)
  }, [])

  return (
    <div className="header">
      <div
        onClick={() => {
          setOpen(false)
          setTimeout(() => setOpen(true), 1500)
        }}
        className={`bgWrapper ${open ? 'bgWrapper-open' : 'bgWrapper-closed'}`}
        style={{ backgroundImage: `Url(${hero})` }}
      />
      <h1>KEITH CHIA</h1>
      <div className="trio">
        <p className="lead red">Developer.</p>
        <p className="lead blue">Designer.</p>
        <p className="lead green">Builder.</p>
      </div>
    </div>
  )
}
