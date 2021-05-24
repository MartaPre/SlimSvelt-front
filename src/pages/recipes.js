import React from 'react';
import SwiperSlider from '../components/SwiperSlider'
import {
  NewsHeaderCard
} from 'react-ui-cards';

class Recipes extends React.Component {
    constructor() {
      super();
      this.state = {
        images: ['./images-food/snacks.jpg', './images-food/bebidas.jpg','./images-food/pasta.jpg', './images-food/ensalada.jpg','./images-food/legumbres.jpg', './images-food/arroz.jpg', './images-food/proteico.jpg'],
        text: ['Snacks', 'Bebidas', 'Pasta', 'Ensaladas', 'Legumbres', 'Arroz', 'Proteico']
      };
    }
    select = (recipe) => {
      fetch('http://localhost:8000/recipes/'+ recipe+ '/')
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
          <div className="center-content-container">    
            {this.state.recipes && <div className={this.props.windowDimensions?.width > 1000 ? 'card-container': 'card-container-phone'}>
              {              
                  this.state.recipes.map((recipe) => {
                    return <div className={this.props.windowDimensions?.width > 1000 ? "recipes-card" : "card-container-phone"}>
                      <NewsHeaderCard
                        href={'/recipeDescription/'+ this.state.actualRecipe +'/' + recipe.recipes_id} //TODO: vista de entrenamientos
                        thumbnail={recipe.photo}
                        title={recipe.name}
                        time={recipe.intesity}
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

export default Recipes;