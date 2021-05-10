import React from 'react';

class Diet extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {        
      return (
        <>
           <h1 className="title">Diario de Comidas</h1>
          <div className="recipes-main-container">
            <div className="recipes-text">
              Organiza tus menús semanales con este diario.
              Podrás registrar las comidas que hagas y llevar un seguimiento de tu dieta.
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

export default Diet;