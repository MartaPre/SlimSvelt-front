import React from 'react';
import SwiperSlider from '../components/SwiperSlider'
import {
  RecipeCard,
} from 'react-ui-cards';

class Trainnings extends React.Component {
    constructor() {
      super();
      this.state = {
        images: ['./images/cardio.jpg', './images/hiit.jpg', './images/yoga.jpg', './images/pilates.jpg', './images/musculacion.jpg'],
        text: ['CARDIO', 'HIIT', 'YOGA', 'PILATES', 'MUSCULACIÓN']
      };
    }

    select = (trainning) => {
      fetch('http://localhost:8000/trainning/'+ trainning)
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
          {this.state.trainnings && <div className={'card-container'}>
            {              
                this.state.trainnings.map((trainning) => {
                  return <div className="recipes-card">
                    <RecipeCard
                      href={'/trainningDescription/'+ this.state.actualTrainning +'/' + trainning.trainning_id} //TODO: vista de entrenamientos
                      thumbnail={trainning.photo}
                      title={trainning.name}
                      time={trainning.intesity} //TODO: AÑADIR TIEMPO A LOS ENTRENAMIENTOS 
                      // servings='3-5'
                      likeCallback={() => alert('You added Fluffy pancakes to favourites')}
                    />
                  </div>
              })
            }            
          </div>}
        </>
      )
    }
  }

export default Trainnings;