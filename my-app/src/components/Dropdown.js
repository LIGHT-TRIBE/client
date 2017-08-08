import React, {Component} from 'react'
import Thumbnail from './Thumbnail'

const dummyColorArray=()=>{
  const newRandomColor=()=>{
    const dot = [];
    [0,0,0].forEach(x=>dot.push(Math.floor(Math.random()*255)))
    return {backgroundColor:`rgb(${dot[0]},${dot[1]},${dot[2]})`}
  }
  const makeDummyArray=()=>{
    const initialState = []
    for (let i = 0; i < 2048; i++){
      initialState.push(newRandomColor())
    }
    return initialState
  }
  return makeDummyArray()
}

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.renderThumbnails = this.renderThumbnails.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    this.props.fetchThumbnails()
  }

  renderThumbnails(){
    const data = this.props.allThumbnails
    //const data = this.props.realArray
    console.log(data)
    const dum = dummyColorArray()
    const arr = [dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum]
    return data.map((thumb, i)=>{
      return(
      <Thumbnail className="thumbnail" key={i} data={thumb.data}/>
      )
    })
    // return(
    //   <Thumbnail data={data}/>
    // )
  }

  handleClick(e){
    e.preventDefault();
    this.props.exportMatrix(this.props.realArray)
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-main">
          <div className="dropdown-container">
            <hr/>
            <div className="thumbnails-container">
              {this.props.realArray != [] && this.renderThumbnails()}
            </div>
            <hr/>
              <div className="thumbnails-container">
                <Thumbnail className="" data={this.props.realArray}/>
                <div className="thumbnail">
                  <div className="submit-btn" onClick={this.handleClick}> SUBMIT </div>
                </div>
              </div>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}
