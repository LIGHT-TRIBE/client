import React, {Component} from 'react'
import Dropdown from  '../components/Dropdown'
import {FaImage} from 'react-icons/lib/fa'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state={showDropdown:false}
  }
  render() {
    return (
      <div className="footer grey">
        <div className="footer-container">
          <div className="userNum">{this.props.users} active {this.props.users===1?'user':'users'}
            <div
              className="dropDownToggle"
              onClick={()=>{this.setState({showDropdown:!this.state.showDropdown})}}>✩<FaImage/></div>
          </div>
          {this.state.showDropdown &&
            <Dropdown
              realArray={this.props.realArray} fetchThumbnails={this.props.fetchThumbnails}/>}
        </div>

      </div>
    )
  }
}

export default Footer
