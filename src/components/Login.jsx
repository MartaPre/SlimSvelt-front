import React, { Component } from "react";


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        };
      }
    submit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email : this.state.email,
                password: this.state.password,
            })
        };
        fetch('http://localhost:8000/auth/login/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.key){
                    fetch('http://localhost:8000/getUser/' + this.state.email + '/')
                    .then(response => response.json())
                    .then(data => {
                       this.props.setUser(data)
                    });                                    
                    this.props.closePopup()
                }
            });
    }
    render() {
        return (
        <form>
          <h3>Iniciar Sesión</h3>
          <div className="form-group">
              <label>Correo electrónico</label>
              <input 
                type="email" 
                className="form-control" 
                placeholder="ejemplo@gmail.com" 
                value={this.state.email}
                onChange={(event) => this.setState({ email: event.target.value })} 
                />
          </div>
          <div className="form-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                className="form-control" 
                placeholder="Introduce la contraseña" 
                value={this.state.password}
                onChange={(event) => this.setState({ password: event.target.value })} 
              />
          </div>
          <div className="btn btn-primary btn-block" onClick={this.submit}>Sign In</div>
      </form>
      );
    }
}
