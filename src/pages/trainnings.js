import React from 'react';
import SwiperSlider from '../components/SwiperSlider'
import {
  RecipeCard,
} from 'react-ui-cards';

class Trainnings extends React.Component {
    constructor() {
      super();
      this.state = {
        images: ['./images/cardio.jpg', './images/hiit.jpg', './images/yoga.jpg'],
        text: ['cardio', 'hiit', 'yoga', 'pilates', 'musculacion']
      };
    }

    select = (training) => {
      fetch('http://localhost:8000/trainning/'+ training)
        .then(response => response.json())
        .then(data => {
          this.setState({ trainings: data, actualTrainning: training })
        });
    }

    render() {        
      return (
        <>
          <h1 className="title">Entrenamientos</h1>
          <SwiperSlider select={this.select} images={this.state.images} text={this.state.text} />          
          {this.state.trainings && <div className={'card-container'}>
            {              
                this.state.trainings.map((training) => {
                  return <div className="recipes-card">
                    <RecipeCard
                      href={'/trainningDescription/'+ this.state.actualTrainning +'/' + training.trainning_id} //TODO: vista de entrenamientos
                      thumbnail={training.photo}
                      title={training.name}
                      time={training.intesity} //TODO: AÑADIR TIEMPO A LOS ENTRENAMIENTOS 
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