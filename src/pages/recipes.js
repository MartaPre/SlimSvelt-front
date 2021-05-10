import React from 'react';
import SwiperSlider from '../components/SwiperSlider'
import {
  RecipeCard,
} from 'react-ui-cards';

class Recipes extends React.Component {
    constructor() {
      super();
      this.state = {
        images: ['./images-food/snacks.jpg', './images-food/bebidas.jpg','./images-food/pasta.jpg', './images-food/ensalada.jpg','./images-food/legumbres.jpg'],
        text: ['Snacks', 'Bebidas', 'Pasta', 'Ensaladas', 'Legumbres']
      };
    }
    select = (recipe) => {
      fetch('http://localhost:8000/recipes/'+ recipe)
        .then(response => response.json())
        .then(data => {
          this.setState({ recipes: data, actualRecipe: recipe })
        });
    }
    render() {        
      return (
        <>
          <h1 className="title">Recetas</h1>
          <SwiperSlider select={this.select} images={this.state.images} text={this.state.text} />          
          {this.state.recipes && <div className={'card-container'}>
            {              
                this.state.recipes.map((recipe) => {
                  return <div className="recipes-card">
                    <RecipeCard
                      href={'/recipeDescription/'+ this.state.actualRecipe +'/' + recipe.recipes_id} //TODO: vista de entrenamientos
                      thumbnail={recipe.photo}
                      title={recipe.name}
                      time={recipe.intesity} //TODO: AÑADIR TIEMPO A LOS ENTRENAMIENTOS 
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

export default Recipes;