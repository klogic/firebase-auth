import React, { Component } from 'react';
import fire from '../fire';

export default class Register extends Component{
  constructor(props){
    super(props);
      this.state = {
      email : '',
      password : '',
      errorLogin : '',
    }
  }

render(){
    const register = (event) => {
      event.preventDefault();
      const email = this.state.email;
      const password = this.state.password;
      fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          console.log(result);
          var user = fire.auth().currentUser;
          if (user != null) {
            user.providerData.forEach(function (profile) {
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Email: " + profile.email);
            });
          }
        })
        .catch((error) => {
          this.setState({errorLogin:error.message})
        });
    }
    const inputHandle = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]: value, errorLogin: ''})
    }
    return(
      <div className="container">
        <div className="col-md-5" style={{"margin": "auto"}}>
          <form onSubmit={register}>
            <h2 className="form-group">Register</h2>
            <h5 className="form-group text-danger" id="errorLogin">{ this.state.errorLogin }</h5>
            <div className="form-group">
              <input type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => { inputHandle(event) }}/>
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(event) => { this.setState({password: event.target.value}) }}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {/* <hr/>
            <div className="form-group">
              <span>Not have user? Register here.</span>
            </div> */}
          </form>
        </div>
      </div>
    )
  }
}