import React from 'react';
import {Card} from "@blueprintjs/core";

class myTrainning extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
      const actualUser = JSON.parse(localStorage.getItem('user'));
      fetch('http://localhost:8000/trainning_user/'+ actualUser.user_id +'/')
        .then(response => response.json())
        .then(data => {
            let trainnings = []
            fetch('http://localhost:8000/trainning/')
                .then(response => response.json())
                .then(trainningData => {
                  trainningData.forEach((item, index)=>{
                    trainnings[item.trainning_id] = item
                    if(index === trainningData.length-1){
                      this.setState({userTrainnings: data, trainnings:trainnings})
                    } 
                  })                                   
            })
        });
    }
    
    render() {        
      console.log(this.state)
      return (
        <>
           <h1 className="title">Diario de Entrenamiento</h1>
          <div className="recipes-main-container">
            {/* <div className="recipes-text">
              Empieza hoy tu diario de entrenamiento y lleva un control personalizado de tu preparación física.
              En este diario podrás registrar tus entrenamientos para poder analizar las cargas e trabajo de días, meses o temporadas
              de entrenamientos anteriores. Podrás evaluar de una manera más completa las variables posibles que intervengan
              en la prescripción de las cargas, para tener una mejor visión de tu estado. Y planificar correctamente
              el entrenamiento para permitirnos garantizar una buena relación trabajo-descanso.
            </div> */}
            {
              this.state.userTrainnings?.map(( trainning)=>{
                const actualTrainning = this.state.trainnings.find((item) => item?.trainning_id ===  trainning.trainning_id)
                console.log(actualTrainning, trainning, "ACTUALTRAINNING")
                return(  
                  <Card className="bp3-elevation-2 bp3-interactive text-list-container my-trainning-description">
                      <h5><div>{actualTrainning?.name + " - " + trainning?.creation_date}</div></h5>
                      <p>
                        <div className="diary-image-container">
                        {actualTrainning?.photo &&                  
                          <img src={actualTrainning?.photo} className="diary-image" alt="" />                    
                        }   
                        </div>
                        <div className="diary-text-container">
                          <div className="diary-text">{actualTrainning?.description}</div>
                        </div>      
                        <div className="diary-kcal-container">
                          <div className='burned-kcal-title'>Calorías quemadas</div>
                          <div className='burned-kcal-text'>{trainning?.burned_kcal}</div>
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

export default myTrainning;