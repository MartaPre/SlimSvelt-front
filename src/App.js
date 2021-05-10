import React, { useState } from 'react';
import Popup from './components/Popup';
import Login from './components/Login';
import Signup from './components/Signup';
import ParticlesBg from 'particles-bg'


import WorkSpace from './components/WorkSpace';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [type, setType] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(false);

 
  const togglePopup = (newType) => {
    setType(newType)
    setIsOpen(true);
  }

  const closePopup = () => {
    setType("")
    setIsOpen(false);
  }

  const logIn = (user) => {
    setUser(user)
    const serializedUser = JSON.stringify(user);
    localStorage.setItem('user', serializedUser);
  }

  const logOut = () => {
    setUser(undefined)
    localStorage.setItem('user', undefined);
  }

  return (<>
    <div className="App">
      <WorkSpace togglePopup={togglePopup} logOut={logOut} user={user} />
      {isOpen && <Popup
        content={type === "signIn" ? <Login closePopup={closePopup} setUser={logIn}/> : <Signup closePopup={closePopup} setUser={setUser}/>}
        handleClose={closePopup}
      />}
    </div>
    <ParticlesBg type="cobweb" num={40} bg={true} />
    </>

  );
}

export default App;