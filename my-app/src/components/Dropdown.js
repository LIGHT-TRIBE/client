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
    if(this.props.allThumbnails!=undefined && this.props.allThumbnails.length>0){
      return this.props.allThumbnails.map((thumb, i)=>{
        return(<Thumbnail thumbnailClass="thumbnail" className="thumbnail" key={i} data={thumb.data}/>)
      })
    }
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
                <div className="thumbnailSubmit">
                  <div className="saveText"><h1>SAVE</h1></div>
                    <a className="thumbnailButton" onClick={this.handleClick}>
                      <Thumbnail thumbnailClass="" data={this.props.realArray}/>
                    </a>
                </div>
              </div>
            <hr/>
          </div>
        </div>
      </div>
    )
  }
}
