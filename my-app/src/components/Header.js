import React, { Component } from 'react'
import Palette from './Palette'
import Slider from './Slider'

export default class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-default shadow white">
        <div className="container">
          <div className="navbar-header">
            <h1 className="brand">CONSTELLATION</h1>
          </div>
            <div className="navbar-right">
              <Palette
                palette={this.props.palette}
                activeColor={this.props.activeColor}
                setColor={this.props.setColor} />
            </div>

              {/*<Slider className="slider"/>*/}
        </div>
      </nav>
    )
  }
}
