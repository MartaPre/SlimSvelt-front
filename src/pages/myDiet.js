import React from 'react';
import {Card, Button} from "@blueprintjs/core";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

    onClickDelete = (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            id:id
        })
    };
    fetch('http://localhost:8000/recipes_user/', requestOptions)
        .then((response) => {
          if(response.status === 204){
           this.setState({ userRecipes:this.state.userRecipes.filter(item => { return item.id !== id} )})
          }
        })
    }
    onChangeCalendar = (value) => {
      this.setState({selectedDate:  this.formatDate(value)})
    }
    formatDate = (date) => {
      let d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [month, day, year].join('/');
  }
    
    render() {        
      let recipesToShow = this.state.userRecipes;
      if(this.state.selectedDate){
        recipesToShow =  this.state.userRecipes.filter((item) => item.creation_date.includes(this.state.selectedDate))
      }
      return (
        <>
           <h1 className="title">Diario de Comidas</h1>
           <div className="calendar-container">
              <Button className="see-all-button bp3-intent-primary" text="Ver todos" onClick={() => this.setState({selectedDate: undefined})} /> 
              <Calendar
                onChange={this.onChangeCalendar}                
              />
          </div>
          <div className="recipes-main-container">
            {/* <div className="recipes-text">
              Empieza hoy tu diario de entrenamiento y lleva un control personalizado de tu preparación física.
              En este diario podrás registrar tus entrenamientos para poder analizar las cargas e trabajo de días, meses o temporadas
              de entrenamientos anteriores. Podrás evaluar de una manera más completa las variables posibles que intervengan
              en la prescripción de las cargas, para tener una mejor visión de tu estado. Y planificar correctamente
              el entrenamiento para permitirnos garantizar una buena relación trabajo-descanso.
            </div> */}
            {
              recipesToShow?.map((recipe)=>{
                const actualRecipe = this.state.recipes.find((item) => item?.recipes_id ===  recipe.recipes_id)
                return  (
                  <Card className="bp3-elevation-2 bp3-interactive text-list-container my-trainning-description">
                      <h5>
                        <div>
                          {actualRecipe?.name + " - " + recipe?.creation_date}
                          <Button className="delete-button bp3-intent-danger" icon="trash" onClick={() => this.onClickDelete(recipe.id)} />    
                        </div>
                      </h5>
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
                          <div className='burned-kcal-title'>Calorías consumidas</div>
                          <div className='burned-kcal-text'>{recipe?.kcal}</div>
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