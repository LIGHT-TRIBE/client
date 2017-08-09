import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import LoginModal from '../components/LoginModal'
import Footer from '../components/Footer'
import ThumbnailPopup from '../components/ThumbnailPopup'
import {setActiveColor, exportSocketsUpdate, inputPassword, fetchThumbnails, exportMatrix} from '../actions'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {showPopup:false}
    const binder=Ms=>Ms.forEach(m=>this[m]=this[m].bind(this))
    binder(['togglePopup', 'loggedIn', 'updateState', 'viewThumbFullSize'])

  }


  togglePopup(){this.setState({showPopup:!this.state.showPopup})}

  viewThumbFullSize(data){
    this.setState({selectedThumb:data})
    this.togglePopup()
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
          {this.state.showPopup &&
            <ThumbnailPopup
              toggle={this.togglePopup}
              thumbnail={this.state.selectedThumb}/>
          }
          <Matrix
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={activeColor}
            exportSocketsUpdate={this.props.onExportSocketsUpdate}
            updateState={this.updateState}/>
          <Footer
            viewThumbFullSize={this.viewThumbFullSize}
            fetchThumbnails={this.props.onFetchThumbnails}
            realArray={this.props.data.socketsData.matrixState}
            exportMatrix={this.props.onStoreThumbnails}
            allThumbnails={this.props.data.thumbnailsData.thumbnails}/>
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
    onFetchThumbnails:()=>{dispatch(fetchThumbnails())},
    onStoreThumbnails:(matrix)=>{dispatch(exportMatrix(matrix))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
