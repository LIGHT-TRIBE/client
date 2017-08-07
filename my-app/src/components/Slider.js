import React, {Component} from 'react'
import {HuePicker} from 'react-color'
import {AlphaPicker} from 'react-color'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(color, e){
    const {rgb} = color
    const RGB = `rgb(${rgb.r},${rgb.g},${rgb.b})`
    this.props.setColor(RGB)
  }

  render() {
    return (
      <div>
        <HuePicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>
        <AlphaPicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>
      </div>
    )
  }
}
