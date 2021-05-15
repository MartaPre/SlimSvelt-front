import React from 'react';
import { Button, Card, Position, Toaster, Toast, Intent } from "@blueprintjs/core";



class TrainningDescription extends React.Component {
    constructor() {
      super();
      this.state = {};
      this.refHandlers = {
        toaster: (ref) => this.toaster = ref,
      };
    }
    componentDidMount = () => {
        const path = window.location.pathname.split('/')
        fetch('http://localhost:8000/trainning/' + path[2]+ '/' + path[3])
        .then(response => response.json())
        .then(data => {
          this.setState({ trainning: data[0], trainning_id:path[3] })
        });

    }

    
    onClickAdd = () => {
      const actualUser = JSON.parse(localStorage.getItem('user'));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user_id: actualUser?.user_id,
            trainning_id : this.state.trainning.trainning_id,
            burned_kcal: 1,            
        })
      };
      fetch('http://localhost:8000/trainning_user/', requestOptions).then(() => {this.addToast()})         
    }
    addToast = () => {
      this.toaster.show({ message: "Entrenamiento añadido", intent: Intent.SUCCESS,});
    }
    render() {
      return (
        <div className="trainning-description-mainContainer">
          <Toaster position={Position.BOTTOM}  usePortal={true} ref={this.refHandlers.toaster}>
            {this.state.toasts?.map(toast => <Toast {...toast} />)}
          </Toaster>   
          <div className="video-button-container">
            {this.state.trainning?.video &&
              <video autoplay="true" loop="true" muted="true" className="trainning-video-container">
                <source src={this.state.trainning.video} type="video/mp4"/>                          
              </video>
            }
            {!this.state.trainning?.video && this.state.trainning?.photo &&
              <div id="container" className="trainning-video-container">
                <img className="my-img" src={this.state.trainning?.photo} alt="" />
              </div>
            }        
            <Button className="add-button bp3-intent-primary" text="Añadir al diario" onClick={() => this.onClickAdd()} />    
                          
          </div>
          <Card className="bp3-elevation-2 bp3-interactive text-list-container trainning-description">
              <h5><div>{this.state.trainning?.name}</div></h5>
              <p>
                {this.state.trainning?.description}
              </p>
          </Card>
        </div>
      )
    }
  }

export default TrainningDescription;