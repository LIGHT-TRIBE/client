import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import LoginModal from '../components/LoginModal'
import Footer from '../components/Footer'
import {setActiveColor, exportSocketsUpdate, inputPassword, fetchThumbnails} from '../actions'
var socket = io('https://constellation.herokuapp.com/users')

class App extends Component {
  constructor(props){
    super(props)
    this.state = {users: 0}
    this.updateState = this.updateState.bind(this)
    this.loggedIn = this.loggedIn.bind(this)
  }
  componentWillMount(){
    socket.on('users', data=>{
      this.setState({users: data.concurrentUsers})
    })
  }
  updateState(i, updatedColor){
    if(i !== undefined && updatedColor !== undefined && this.props.data.socketsData.matrixState !==undefined){
      const data = this.props.data.socketsData.matrixState
      const updatedArr = data.slice()
      updatedArr[i] = {backgroundColor: updatedColor.replace(/\s+/g,'')}
      this.props.onExportSocketsUpdate({index: i, data: updatedArr[i]})
    }
  }
  loggedIn(){ this.forceUpdate() }

  render() {
    const {activeColor} = this.props.data.colorData
    return (
      <div
        className="App grey">
        <div>
          {localStorage.auth !== 'Enjoy!' && <LoginModal inputPassword={this.props.onInputPassword} loggedIn={this.loggedIn}/>}
          <Header
            setColor={this.props.onSetActiveColor}
            activeColor={activeColor}/>
          <Matrix
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={activeColor}
            exportSocketsUpdate={this.props.onExportSocketsUpdate}
            updateState={this.updateState}/>
          <Footer
            users={this.state.users}
            fetchThumbnails={this.props.onFetchThumbnails}/>
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
    onInputPassword:(password, isLoggedIn)=>{dispatch(inputPassword(password, isLoggedIn))},
    onFetchThumbnails:()=>{dispatch(fetchThumbnails())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
