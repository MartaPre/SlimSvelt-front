import React from 'react';
import MyCarousel from '../components/Carousel';

// import Route from 'react-router-dom/Route'
// import myTrainning from './myTrainning';
// import Diet from './myDiet';

class Home extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }    
    render() {        
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
            <div className="home-video-container">
              <video autoplay="true" loop="true" muted="true" class="w-100 d-none d-lg-block">
                <source src="/sport_video.mp4" type="video/mp4"/>                          
              </video>
            </div>
            <div className="trainnings-home-main-container">              
              <div className="carousel-container" ><MyCarousel/></div>
              <div className="video-text">  
                <div className="text-list-container">
                  <ul className="pl-0 list">
                    <li>Entrenamientos diferentes</li>
                    <li>Entrena donde y cuando quieras <span class="font-weight-bold">24/7</span></li>
                    <li>Entrenadores de <span class="font-weight-bold">primer nivel</span></li>
                    <li>Para todos los <span class="font-weight-bold">objetivos y niveles</span></li>
                  </ul>                  
                </div>
                <div className="text-list-container">
                  <ul className="pl-0  list">
                    <li>Entrenamientos diferentes</li>
                    <li>Entrena donde y cuando quieras <span class="font-weight-bold">24/7</span></li>
                    <li>Entrenadores de <span class="font-weight-bold">primer nivel</span></li>
                    <li>Para todos los <span class="font-weight-bold">objetivos y niveles</span></li>
                  </ul>                  
                </div>
              </div>
            </div> 
          </div> 
        </>
      )
    }
  }

export default Home;
