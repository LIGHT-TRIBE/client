import React, {Component} from 'react'
import Dropdown from  '../components/Dropdown'
import {FaImage} from 'react-icons/lib/fa'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state={showDropdown:true}
  }
  render() {
    return (
      <div className="shadow white">
        <div className="userNum">{this.props.users} active {this.props.users===1?'user':'users'}</div>
        <div className="dropDownToggle">
          <FaImage/>✩
        </div>
        {this.state.showDropdown &&
          <Dropdown
            realArray={this.props.realArray} fetchThumbnails={this.props.fetchThumbnails}/>}
      </div>
    )
  }
}

export default Footer
