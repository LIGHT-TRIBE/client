import React, {Component} from 'react'
import dummyColorArray from '../reducers/dummy_array_generator'
import Thumbnail from './Thumbnail'

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
    const dum = dummyColorArray(Math.floor(Math.random()*255))
    const arr = [dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum,dum]
    return data.map((thumb, i)=>{
      return(
      <Thumbnail className="thumbnail" key={i} data={thumb.data}/>
      )
    })
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
