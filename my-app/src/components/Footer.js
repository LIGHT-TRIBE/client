import React, {Component} from 'react'
import Dropdown from  '../components/Dropdown'
import {FaImage} from 'react-icons/lib/fa'
import socket from '../socket'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state={showDropdown:false, users:0}
  }
  componentWillMount(){
    socket.on('users', data=>{
      this.setState({users: data.concurrentUsers})
    })
    }
  render() {
    return (
      <div className="footer grey">
        <div className="footer-container">
          <div className="userNum">{this.state.users} active {this.state.users===1?'user':'users'}
            <div
              className="dropDownToggle"
              onClick={()=>{this.setState({showDropdown:!this.state.showDropdown})}}> ✩<FaImage/> </div>
          </div>
          {this.state.showDropdown &&
            <Dropdown
              viewThumbFullSize={this.props.viewThumbFullSize}
              realArray={this.props.realArray}
              fetchThumbnails={this.props.fetchThumbnails} exportMatrix={this.props.exportMatrix} allThumbnails={this.props.allThumbnails}/>}
        </div>
      </div>
    )
  }
}

export default Footer
