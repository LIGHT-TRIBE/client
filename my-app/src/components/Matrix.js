import React, { Component } from 'react'
import Dot from './Dot'

export default class Matrix extends Component {
  constructor(props){
    super(props)
    this.state = {cachedArray:this.props.dummyArray}
    this.sendSocketsState = this.sendSocketsState.bind(this)
  }

  componentWillMount(){
    this.props.exportSocketsUpdate(this.props.dummyArray)
  }

  sendSocketsState(i, updatedColor){
    if(this.props.realArray != undefined){
      this.setState({cachedArray:this.props.realArray})
    }
    this.props.updateState(i, updatedColor)
  }

  render() {
    const input = this.props.realArray != undefined ? this.props.realArray : this.state.cachedArray
    const matrix = input.map((color, i)=>{
      return (
        <Dot key={i}
          setColor={this.props.setColor}
          currentColor={color}
          activeColor={this.props.activeColor}
          sendSocketsState={()=>{this.sendSocketsState(i, this.props.activeColor)}}/>)
    })
    return(
      <div className="matrix-container">
          {matrix}
      </div>
    )
  }
}
