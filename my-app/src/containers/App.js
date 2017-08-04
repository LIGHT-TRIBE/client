import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import {setActiveColor, fetchPalette, exportSocketsUpdate, inputPassword} from '../actions'
import LoginModal from '../components/LoginModal'

class App extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
  }
  componentWillMount(){this.props.onFetchPalette()}

  updateState(i, updatedColor){
    const data = this.props.data.socketsData.matrixState
    const updatedArr = data.slice()
    updatedArr[i] = {backgroundColor: updatedColor.replace(/\s+/g,'')}
    this.props.onExportSocketsUpdate(updatedArr)
  }

  render() {
    const {colorData} = this.props.data
    return (
      <div className="App grey">
        <div>
          {!localStorage.auth && <LoginModal inputPassword={this.props.onInputPassword}/>}
          <Header
            palette={colorData.palette}
            setColor={this.props.onSetActiveColor}
            activeColor={colorData.activeColor}/>
          <Matrix
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={colorData.activeColor}
            exportSocketsUpdate={this.props.onExportSocketsUpdate}
            updateState={this.updateState}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{ return {data:state} }

const mapDispatchToProps=(dispatch)=>{
  return{
    onSetActiveColor:(color)=>{dispatch(setActiveColor(color))},
    onFetchPalette:()=>{dispatch(fetchPalette())},
    onExportSocketsUpdate:(data)=>{dispatch(exportSocketsUpdate(data))},
    onInputPassword:(password)=>{dispatch(inputPassword(password))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
