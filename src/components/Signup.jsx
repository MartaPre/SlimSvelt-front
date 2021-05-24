import React, { Component } from "react";
import { Position ,Toaster, Toast, Intent } from "@blueprintjs/core";


export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: ""
        };
        this.refHandlers = {
            toaster: (ref) => this.toaster = ref,
        };
      }
    submit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: this.state.name,
                email : this.state.email,
                password1: this.state.password,
                password2: this.state.password
            })
        };
        fetch('http://localhost:8000/auth/register/', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.key){
                    this.props.closePopup()
                }else{
                    this.addToast()
                }
            });
    }
    addToast = () => {
        this.toaster.show({ message: "Error al registrarse", intent: Intent.DANGER});
    }

    render() {        
        return (
            <form>
                 <Toaster position={Position.BOTTOM}  usePortal={true} ref={this.refHandlers.toaster}>
                    {this.state.toasts?.map(toast => <Toast {...toast} />)}
                </Toaster> 
                <h3>Registro</h3>

                <div className="form-group">
                    <label>Nombre</label>
                    <input 
                        type="text"
                        className="form-control" 
                        placeholder="Nombre" 
                        value={this.state.name}
                        onChange={(event) => this.setState({ name: event.target.value })} 
                    />
                </div>

                <div className="form-group">
                    <label>Apellido</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Apellido" 
                        value={this.state.surname}
                        onChange={(event) => this.setState({ surname: event.target.value })} 
                        
                    />
                </div>

                <div className="form-group">
                    <label>Correo electrónico</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Introduce correo electrónico" 
                        value={this.state.email}
                        onChange={(event) => this.setState({ email: event.target.value })} 
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Introduce una contraseña" 
                        value={this.state.password}
                        onChange={(event) => this.setState({ password: event.target.value })} 
                    />
                </div>

                <div  className="btn btn-primary btn-block" onClick={this.submit} >Sign Up</div>
                {/* <p className="forgot-password text-right">
                    Already registered 
                    <a href="#">sign in?</a>
                </p> */}
            </form>
        );
    }
}