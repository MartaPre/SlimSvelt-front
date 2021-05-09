import React from 'react';

class myTrainning extends React.Component {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {        
      return (
        <>
           <h1 className="title">Diario de Entrenamiento</h1>
          <div className="recipes-main-container">
            <div className="recipes-text">
              Empieza hoy tu diario de entrenamiento y lleva un control personalizado de tu preparación física.
              En este diario podrás registrar tus entrenamientos para poder analizar las cargas e trabajo de días, meses o temporadas
              de entrenamientos anteriores. Podrás evaluar de una manera más completa las variables posibles que intervengan
              en la prescripción de las cargas, para tener una mejor visión de tu estado. Y planificar correctamente
              el entrenamiento para permitirnos garantizar una buena relación trabajo-descanso.
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

export default myTrainning;