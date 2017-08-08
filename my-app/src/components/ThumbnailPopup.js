import React, {Component} from 'react';

export default class ThumbnailPopup extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const input = this.props.thumbnail
    const matrix = input.map((color, i)=>{
      return (
        <div
          key={i}
          style={color}
          className="circle circle-shadow">
          <div></div>
        </div>)
    })
    return(
      <div
        onClick={this.props.toggle}
        className="popup matrix-container">
          {matrix}
      </div>
    )
  }
}
