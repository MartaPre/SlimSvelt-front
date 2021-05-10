import React from 'react';


class RecipeDescription extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
        const path = window.location.pathname.split('/')
        fetch('http://localhost:8000/recipes/' + path[2]+ '/' + path[3])
        .then(response => response.json())
        .then(data => {
          this.setState({ recipe: data })
        });

    }

    render() {
      return (
        <div className="trainning-description-mainContainer">
          {this.state.recipe?.video &&
            <video autoplay="true" loop="true" muted="true" className="trainning-video-container">
              <source src={this.state.recipe.video} type="video/mp4"/>                          
            </video>
          }
          {!this.state.recipe?.video && this.state.recipe?.photo &&
            <div id="container" className="trainning-video-container">
              <img src={this.state.recipe?.photo} alt="" />
            </div>
          }
          <div className="trainning-description">
            {this.state.recipe?.description}
          </div>          
        </div>
      )
    }
  }

export default RecipeDescription;