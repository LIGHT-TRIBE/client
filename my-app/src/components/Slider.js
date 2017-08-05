import React, {Component} from 'react'
import {SliderPicker} from 'react-color'

class Slider extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      selectedColor: this.props.activeColor
    }
  }

  handleChange(color, e){
    console.log(e, color)
    const format = `rgb(${color.rgb.r},${color.rgb.g},${color.rgb.b})`
    this.setState({selectedColor:format})
    this.props.setColor(format)

  }

  render() {
    return (
      <SliderPicker onChangeComplete={this.handleChange} color={this.state.selectedColor}/>
    )
  }
}

export default Slider
