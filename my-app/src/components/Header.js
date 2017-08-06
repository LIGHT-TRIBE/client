import React from 'react'
import Slider from './Slider'

export default function Header(props){
  return (
    <nav className="navbar navbar-default shadow white">
      <div className="container header-content">
        <div className="navbar-header">
          <h1 className="brand">CONSTELLATION</h1>
        </div>
        <div className="navbar-right">
          <Slider
            className="slider"
            activeColor={props.activeColor}
            setColor={props.setColor}/>
        </div>
      </div>
    </nav>
  )
}
