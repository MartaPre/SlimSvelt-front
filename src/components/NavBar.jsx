import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'
//import { Navbar } from 'react-bootstrap';
import { Button, Icon,Navbar, Alignment } from "@blueprintjs/core";

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
            <Navbar>
                <Navbar.Group align={Alignment.RIGHT}>
                    <Navbar.Heading>SlimSvelt</Navbar.Heading>
                    <Navbar.Divider />
                    <NavLink to="/inicio" ><Button className="bp3-minimal" icon={<Icon icon={"home"} style={{color:"black"}}/>}  text={this.props.windowDimensions.width > 700 ?"Inicio" : ""} /></NavLink>      
                    <NavLink to="/entrenamientos" ><Button className="bp3-minimal" icon={<Icon icon={"walk"} style={{color:"black"}}/>} text={this.props.windowDimensions.width > 700 ?"Entrenamientos" : ""} /></NavLink>  
                    <NavLink to="/recetas" ><Button className="bp3-minimal" icon={<Icon icon={"glass"} style={{color:"black"}}/>} text={this.props.windowDimensions.width > 700 ?"Recetas" : ""} /></NavLink> 
                    {this.props.user && this.props.user !== "undefined" && <><NavLink to="/mientrenamiento" ><Button className="bp3-minimal" icon={<Icon icon={"clipboard"} style={{color:"black"}}/>} text={this.props.windowDimensions.width > 700 ?"Diario de entrenamiento" : ""} /></NavLink> 
                    <NavLink to="/midieta" ><Button className="bp3-minimal" icon={<Icon icon={"annotation"} style={{color:"black"}}/>} text={this.props.windowDimensions.width > 700 ? "Diario de comidas": ""} /></NavLink></>}
                </Navbar.Group>
            </Navbar>
        )
    }
};
NavBar = withRouter(NavBar);
export default NavBar;
