import React, {Component} from 'react'
import {SliderPicker} from 'react-color'

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
      <SliderPicker
        onChangeComplete={this.handleChange} color={this.props.activeColor}/>
    )
  }
}
