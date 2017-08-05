import React, {Component} from 'react'
import {SliderPicker} from 'react-color'

export default class Slider extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(color, e){
    const format = `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`
    this.props.setColor(format)
  }

  render() {
    return (
      <SliderPicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>
    )
  }
}
