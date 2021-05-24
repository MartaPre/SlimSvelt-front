import React from 'react';
import MyCarousel from '../components/Carousel';
import { Button, Card } from "@blueprintjs/core";


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
              { (!this.props.user || this.props.user === "undefined")
                ? <div className="main-button-container">                  
                    <Button className="main-button bp3-intent-primary" text="Regístrate" onClick={() => this.props.togglePopup("signUp")} />     
                    <Button className="main-button bp3-intent-primary" text="Inicia sesión" onClick={() => this.props.togglePopup("signIn")} />       
                  </div>
                : <div className="main-button-container">
                    <Button className="main-button bp3-intent-primary" text="Desconectarse" onClick={() => this.props.logOut()} />       
                  </div>
              }
            </div>
            <div className="home-video-container">
              <video autoplay="true" loop="true" muted="true" class="w-100 d-none d-lg-block">
                <source src="/sport_video.mp4" type="video/mp4"/>                          
              </video>
            </div>
            <div className="trainnings-home-main-container">              
            {this.props.windowDimensions.width > 900 && <div className="carousel-container" ><MyCarousel/></div>}
              {this.props.windowDimensions.width > 900 && <div className="video-text">  
                 <Card className="bp3-elevation-2 bp3-interactive text-list-container">
                    <h5><div>Como quieras</div></h5>
                    <p>
                        <ul className="pl-0  list">
                          <li>Entrenamientos diferentes</li>
                          <li>Entrena donde quieras </li>
                          <li>Entremaminetos de <span class="font-weight-bold">primer nivel</span></li>
                          <li>Para todos los <span class="font-weight-bold">objetivos y niveles</span></li>
                        </ul>    
                    </p>
                </Card>
                <Card className="bp3-elevation-2 bp3-interactive text-list-container">
                    <h5><div>Cuando quieras</div></h5>
                    <p>
                        <ul className="pl-0  list">
                          <li>Entrenamientos diferentes</li>
                          <li>Entrena cuando quieras <span class="font-weight-bold">24/7</span></li>
                          <li>Entrenamientos<span class="font-weight-bold"> siempre disponibles</span></li>
                          <li>Para todos las <span class="font-weight-bold"> personas</span></li>
                        </ul>    
                    </p>
                </Card>
              </div>}
            </div> 
          </div> 
        </>
      )
    }
  }

export default Home;
