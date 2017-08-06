import React, { Component } from 'react'
import { connect } from 'react-redux'
import { socket } from '../Store'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import LoginModal from '../components/LoginModal'
import {setActiveColor, exportSocketsUpdate, inputPassword} from '../actions'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {users: 0}
    this.updateState = this.updateState.bind(this)
  }

  updateState(i, updatedColor){
    const data = this.props.data.socketsData.matrixState
    const updatedArr = data.slice()
    updatedArr[i] = {backgroundColor: updatedColor.replace(/\s+/g,'')}
    this.props.onExportSocketsUpdate({index: i, data: updatedArr[i]})
  }

  render() {
    socket.on('users', data=>{
      this.setState({users: data.concurrentUsers})
    })
    const {activeColor} = this.props.data.colorData
    return (
      <div className="App grey">
        <div>
          {localStorage.auth !== 'Enjoy!' && <LoginModal inputPassword={this.props.onInputPassword}/>}
          <Header
            setColor={this.props.onSetActiveColor}
            activeColor={activeColor}/>
          <Matrix
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={activeColor}
            exportSocketsUpdate={this.props.onExportSocketsUpdate}
            updateState={this.updateState}/>
          <div className="userNum">{this.state.users} active {this.state.users===1?'user':'users'}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{ return {data:state} }

const mapDispatchToProps=(dispatch)=>{
  return{
    onSetActiveColor:(color)=>{dispatch(setActiveColor(color))},
    onExportSocketsUpdate:(data)=>{dispatch(exportSocketsUpdate(data))},
    onInputPassword:(password)=>{dispatch(inputPassword(password))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
