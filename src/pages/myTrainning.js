import React from 'react';

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
            const unique = [...new Set(data.map(item => item.trainning_id))]
            unique.forEach((item, index)=>{
              console.log(unique, "UNIQUE")
              fetch('http://localhost:8000/trainning/general/'+item+'/')
                .then(response => response.json())
                .then(trainningData => {
                    trainnings[(item+"")] = trainningData[0]
                    if(index === unique.length-1){
                      this.setState({userTrainnings: data, trainnings:trainnings})
                    }      
                });
              
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
                return  <div className="recipes-container">
                  <div className="diary-image-container">
                  {actualTrainning?.photo &&                  
                    <img src={actualTrainning?.photo} className="diary-image" alt="" />                    
                  }   
                  </div>
                  <div className="diary-text-container">
                    <div className="diary-name">{actualTrainning?.name + " - " + trainning?.creation_date}</div>
                    <div className="diary-text">{actualTrainning?.description}</div>
                  </div>      
                  <div className="diary-kcal-container">
                    <div className='burned-kcal-title'>Calorías quemadas</div>
                    <div className='burned-kcal-text'>{trainning?.burned_kcal}</div>
                  </div>                    
                </div>
              })
            }
           
          </div>
        </>
      )
    }
  }

export default myTrainning;