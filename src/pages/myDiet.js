import React from 'react';
import {Card} from "@blueprintjs/core";

class MyDiet extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
      const actualUser = JSON.parse(localStorage.getItem('user'));
      fetch('http://localhost:8000/recipes_user/'+ actualUser.user_id +'/')
        .then(response => response.json())
        .then(data => {
            let recipes = []
            fetch('http://localhost:8000/recipes/')
                .then(response => response.json())
                .then(recipesData => {
                  recipesData.forEach((item, index)=>{
                    recipes[item.recipes_id] = item
                    if(index === recipesData.length-1){
                      this.setState({userRecipes: data, recipes:recipes})
                    } 
                  })                                   
            })
        });
    }
    
    render() {        
      console.log(this.state)
      return (
        <>
           <h1 className="title">Diario de Comidas</h1>
          <div className="recipes-main-container">
            {/* <div className="recipes-text">
              Empieza hoy tu diario de entrenamiento y lleva un control personalizado de tu preparación física.
              En este diario podrás registrar tus entrenamientos para poder analizar las cargas e trabajo de días, meses o temporadas
              de entrenamientos anteriores. Podrás evaluar de una manera más completa las variables posibles que intervengan
              en la prescripción de las cargas, para tener una mejor visión de tu estado. Y planificar correctamente
              el entrenamiento para permitirnos garantizar una buena relación trabajo-descanso.
            </div> */}
            {
              this.state.userRecipes?.map((recipe)=>{
                const actualRecipe = this.state.recipes.find((item) => item?.recipes_id ===  recipe.recipes_id)
                console.log(actualRecipe, recipe, "ACTUALTRAINNING")
                return  (
                  <Card className="bp3-elevation-2 bp3-interactive text-list-container my-trainning-description">
                      <h5><div>{actualRecipe?.name + " - " + recipe?.creation_date}</div></h5>
                      <p>
                        <div className="diary-image-container">
                        {actualRecipe?.photo &&                  
                          <img src={actualRecipe?.photo} className="diary-image" alt="" />                    
                        }   
                        </div>
                        <div className="diary-text-container">
                          <div className="diary-text">{actualRecipe?.description}</div>
                        </div>      
                        <div className="diary-kcal-container">
                          <div className='burned-kcal-title'>Calorías quemadas</div>
                          <div className='burned-kcal-text'>{recipe?.grams}</div>
                        </div>         
                        </p>
                  </Card>
                )
              })
            }
           
          </div>
        </>
      )
    }
  }

export default MyDiet;