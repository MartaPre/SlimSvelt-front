import React from 'react';

class Recipes extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {        
      return (
        <>
          <h1 className="title">Recetas</h1>
          <div className="recipes-main-container">
            <div className="recipes-text">
              Bienvenido al panel de las recetas.
            </div>
            <div className="recipes-container">

            </div>
            <div className="recipes-container">

            </div>
            <div className="recipes-container">

            </div>

          </div>
        </>
      )
    }
  }

export default Recipes;