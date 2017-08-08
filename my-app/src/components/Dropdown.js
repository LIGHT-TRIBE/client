import React, {Component} from 'react'
import Thumbnail from './Thumbnail'

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.renderThumbnails = this.renderThumbnails.bind(this)
  }

  renderThumbnails(){
    // const data = this.props.fetchThumbnails()
    const data = this.props.realArray
    {console.log(data);}

    //
    // data.map(thumb=>{return(
    //   <Thumbnail data={thumb.backgroundColor}/>
    // )})
    return(
      <Thumbnail data={data}/>
    )
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdown-main">
          <div className="dropdown-container">
            {this.props.realArray != [] && this.renderThumbnails()}
          </div>
        </div>
      </div>
    )
  }
}
