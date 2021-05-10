import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown'

class NavBar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    login = () => {
        this.props.togglePopup("signIn")
    }

    signUp = () => {
        this.props.togglePopup("signUp")
    }
     
    render() {
        return (
            <Navbar bg="black" variant="dark" sticky="top">
            <Navbar.Brand>
            {/* <img
                src="./logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=" "></img> */}
            </Navbar.Brand>
                
                <div className="nav-options" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className={this.getNavLinkClass("/")}><NavLink to="/inicio" >Inicio</NavLink></li>
                        <li className={this.getNavLinkClass("/")}><NavLink to="/entrenamientos" >Trainnings</NavLink></li>
                        <li className={this.getNavLinkClass("/")}><NavLink to="/recetas" >Recetas</NavLink></li>
                        <li className={this.getNavLinkClass("/")}><NavLink to="/mientrenamiento" >Diario de entrenamiento</NavLink></li>
                        <li className={this.getNavLinkClass("/")}><NavLink to="/midieta" >Diario de comidas</NavLink></li>
                    </ul>
                </div> 
                {/* <NavDropdown bg="black" title="Usuario" id="collasible-nav-dropdown" style={{ color: "#5299d3" }}>
                    <NavDropdown.Item style={{ color: "#5299d3" }} href="#action1" onClick={this.login}  >Iniciar sesión</NavDropdown.Item>
                    <NavDropdown.Item style={{ color: "#5299d3" }} href="#action2" onClick={this.signUp} >Registrarse</NavDropdown.Item>
                </NavDropdown>   */}
            </Navbar>
        )
    }
};
NavBar = withRouter(NavBar);
export default NavBar;
