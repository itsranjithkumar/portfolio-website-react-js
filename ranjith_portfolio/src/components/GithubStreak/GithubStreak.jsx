import React from 'react'

import DownloadCV from './DownloadCV'
const GithubStreak = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <p style={{ fontSize: '25px' }}>My GitHub Streak</p>
      <br />
      <a href="https://github.com/itsranjithkumar" target="_blank" rel="noopener noreferrer">
        <img 
            // to set background color as qwhite
          src="https://ghchart.rshah.org/1aa8b8/itsranjithkumar" 
          alt="gokul-1998's Github chart" 
          width="1150" 
          height="150"
          style={{ maxWidth: '100%', height: 'auto' ,backgroundColor: '' }}
        />
      </a>
    </div>
  )
}

export default GithubStreak
