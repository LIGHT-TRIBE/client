import React, {Component} from 'react'
import {SliderPicker} from 'react-color'
import{CustomSlider} from './CustomSlider'
// import {AlphaPicker, Huepicker} from 'react-color'

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
        <SliderPicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>
        {/*<HuePicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>
        <AlphaPicker onChangeComplete={this.handleChange} color={this.props.activeColor}/>*/}
      </div>
    )
  }
}
