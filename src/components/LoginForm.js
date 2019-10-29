import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username: '',
      password: ''
      // ,
      // submittedData: []
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    // console.log(this.state.username)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // let formData = { username: this.state.username, password: this.state.password }
    // let dataArray = this.state.submittedData.concat(formData)
    // this.setState({submittedData: dataArray})
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              id="username" 
              onChange={event => this.handleChange(event)} 
              name="username" 
              type="text" 
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              onChange={event => this.handleChange(event)} 
              name="password" 
              type="password" 
              value={this.state.password} 
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
