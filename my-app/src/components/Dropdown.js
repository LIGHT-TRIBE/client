import React, {Component} from 'react'
import dummyColorArray from '../reducers/dummy_array_generator'
import Thumbnail from './Thumbnail'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state={
      selectedThumb:[],
      showPopup:false,
      showSave: false
    }
    const binder=Ms=>Ms.forEach(m=>this[m]=this[m].bind(this))
    binder(['renderThumbnails', 'handleClick', 'showSave'])
  }

  componentWillMount(){
    this.props.fetchThumbnails()
  }

  // viewThumbFullSize(data){
  //   console.log(data);
  //   this.setState({
  //     selectedThumb:data,
  //     showPopup:!this.state.showPopup
  //   })
  // }

  renderThumbnails(){
    if(this.props.allThumbnails!=undefined && this.props.allThumbnails.length>0){
      return this.props.allThumbnails.map((thumb, i)=>{

        return(<Thumbnail
          viewThumbFullSize={this.props.viewThumbFullSize}
          className="thumbnail"
          key={i}
          data={thumb.data}/>)
      })
    }
  }

  handleClick(e){
    e.preventDefault();
    this.props.exportMatrix(this.props.realArray)
  }

  showSave(){
    this.setState({
      showSave: true
    })
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
                <div className="thumbnailSubmit" onMouseEnter={this.showSave} onMouseLeave={this.showSave}>
                  <div className="saveText">
                    {this.state.showSave && <h1>SAVE</h1>}
                    </div>
                    <a className="thumbnailButton" onClick={this.handleClick}>
                      <Thumbnail submit={true} data={this.props.realArray}/>
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
