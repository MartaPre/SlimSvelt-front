import React from 'react';
// import Route from 'react-router-dom/Route'
// import myTrainning from './myTrainning';
// import Diet from './myDiet';

class Home extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }    
    render() {        
      console.log(this.props)
      return (
        <>      
          <div className="home-main-container">
            <div className="main-text-container">
              <>
                COMIENZA UNA NUEVA VIDA
              </> 
              { !this.props.user 
                ? <div className="main-button-container">
                  <div className="main-button" onClick={() => this.props.togglePopup("signUp")}>
                    Regístrate
                  </div>
                  <div className="main-button" onClick={() => this.props.togglePopup("signIn")}>
                    Inicia sesión
                  </div>
                </div>
                : <div className="main-button-container">
                  <div className="main-button" onClick={() => this.props.logOut()}>
                    Desconectarse
                  </div>                 
                </div>
              }
            </div>
            <video autoplay="true" loop="true" muted="true" class="w-100 d-none d-lg-block">
              <source src="/sport_video.mp4" type="video/mp4"/>                          
            </video>
           <div className="trainnings-home-main-container">
              <div className="video-text">
                <div>Ponte en forma</div>
                <div>
                  <ul className="pl-0 mb-5 showcase">
                    <li>Clases en directo todos los días </li>
                    <li>Entrenamientos diferentes</li>
                    <li>Entrena donde y cuando quieras <span class="font-weight-bold">24/7</span></li>
                    <li>Entrenadores de <span class="font-weight-bold">primer nivel</span></li>
                    <li>Para todos los <span class="font-weight-bold">objetivos y niveles</span></li>
                  </ul>
                </div>
              </div>
              <div className="video-container">
                <div className="video">
                </div>
              </div>              
            </div>
            <div className="links-main-container">
              <div className="links-text">
                Mens sana in corpore sano
              </div>
              <div className="links">
                <div className="link">
                </div>
                <div className="link">
                </div>
              </div>
            </div> 
          </div> 
        </>
      )
    }
  }

export default Home;
