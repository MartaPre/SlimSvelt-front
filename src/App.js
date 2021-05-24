import React from 'react';
import Popup from './components/Popup';
import Login from './components/Login';
import Signup from './components/Signup';
import ParticlesBg from 'particles-bg'


import WorkSpace from './components/WorkSpace';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super();
    let actualUser = localStorage.getItem('user');
    if(actualUser !== undefined && actualUser !== "undefined"){
      actualUser = JSON.parse(actualUser)
    }
    this.state = {
      type: undefined,
      isOpen: undefined,
      user: actualUser
    };
  }


 getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
  }

  setType = (type) => {
    this.setState({type})
  }
  setIsOpen = (isOpen) => {
    this.setState({isOpen})
  }
  setUser = (user) => {
    this.setState({user})
  }
  togglePopup = (newType) => {
    this.setType(newType)
    this.setIsOpen(true);
  }

  closePopup = () => {
    this.setType("")
    this.setIsOpen(false);
  }

  logIn = (user) => {
    this.setUser(user)
    const serializedUser = JSON.stringify(user);
    localStorage.setItem('user', serializedUser);
  }

   logOut = () => {
    this.setUser(undefined)
    localStorage.setItem('user', "undefined");
  }
  render (){
    
    const windowDimensions = this.getWindowDimensions()
    return (<>
      <div className="App">
        <WorkSpace togglePopup={this.togglePopup} logOut={this.logOut} user={this.state.user} windowDimensions={windowDimensions}/>
        {this.state.isOpen && <Popup
          content={this.state.type === "signIn" ? <Login closePopup={this.closePopup} setUser={this.logIn}/> : <Signup closePopup={this.closePopup} setUser={this.setUser}/>}
          handleClose={this.closePopup}
        />}
      </div>
      <ParticlesBg type="cobweb" num={40} bg={true} />
      </>

    );
  }
}

export default App;
