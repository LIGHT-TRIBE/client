import React, { Component } from 'react'

export default class LoginModal extends Component {
  constructor(props){
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      password: "",
      stars: ""
    }
  }

  handleInput(e){
    const passwordInput = e.target.value;
    const stars = (input) => {
      const starArray = []
      const splitter = input.split("")
      for(let i of splitter){
        starArray.push('*')
      }
      return starArray.join('')
    }
    this.setState({
      password: passwordInput,
      stars: stars(passwordInput)
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.inputPassword(this.state.password)
  }

  render(){
    return (
      <div className="loginContainer">
        <div className="screen">
        </div>
        <div className="loginModal">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" className="form-control codeInput" placeholder="PASSWORD" value={this.state.password} onChange={this.handleInput} aria-describedby="basic-addon1"/>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
