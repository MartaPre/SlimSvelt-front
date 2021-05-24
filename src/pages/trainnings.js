import React from 'react';
import SwiperSlider from '../components/SwiperSlider'
import {
  NewsHeaderCard
} from 'react-ui-cards';

class Trainnings extends React.Component {
    constructor() {
      super();
      this.state = {
        images: ['./images/cardio.jpg', './images/hiit.jpg', './images/yoga.jpg', './images/pilates.jpg', './images/musculacion.jpg', './images/estiramientos.jpg'],
        text: ['CARDIO', 'HIIT', 'YOGA', 'PILATES', 'MUSCULACIÓN', 'ESTIRAMIENTOS']
      };
    }

    select = (trainning) => {
      fetch('http://localhost:8000/trainning/'+ trainning + '/')
        .then(response => response.json())
        .then(data => {
          this.setState({ trainnings: data, actualTrainning: trainning })
        });
    }

    render() {        
      return (
        <>
          <h1 className="title">Entrenamientos</h1>
          <SwiperSlider select={this.select} images={this.state.images} text={this.state.text} />      
          <div className="center-content-container">    
            {this.state.trainnings && <div className={this.props.windowDimensions?.width > 1000 ? 'card-container': 'card-container-phone'}>
              {              
                  this.state.trainnings.map((trainning) => {
                    return <div className={"recipes-card"}>
                      <NewsHeaderCard
                        href={'/trainningDescription/'+ this.state.actualTrainning +'/' + trainning.trainning_id} 
                        thumbnail={trainning.photo}
                        title={trainning.name}
                        time={trainning.intesity} 
                      />
                    </div>
                })
              }            
            </div>}
          </div>
        </>
      )
    }
  }

export default Trainnings;