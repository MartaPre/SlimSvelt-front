import React from 'react';


class TrainningDescription extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
        const path = window.location.pathname.split('/')
        fetch('http://localhost:8000/trainning/' + path[2]+ '/' + path[3])
        .then(response => response.json())
        .then(data => {
          this.setState({ training: data[0], trainning_id:path[3] })
        });

    }
    onClickAdd = () => {
      const actualUser = JSON.parse(localStorage.getItem('user'));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            user_id: actualUser?.user_id,
            trainning_id : this.state.training.trainning_id,
            burned_kcal: 1,            
        })
    };
    fetch('http://localhost:8000/trainning_user/', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.key){
                this.props.closePopup()
            }
        });
    }
    render() {
      return (
        <div className="trainning-description-mainContainer">
          <div className="video-button-container">
            {this.state.training?.video &&
              <video autoplay="true" loop="true" muted="true" className="trainning-video-container">
                <source src={this.state.training.video} type="video/mp4"/>                          
              </video>
            }
            {!this.state.training?.video && this.state.training?.photo &&
              <div id="container" className="trainning-video-container">
                <img className="my-img" src={this.state.training?.photo} alt="" />
              </div>
            }          
            <div className="add-trainning-button" onClick={this.onClickAdd}>Añadir al diario</div>
          </div>
          <div className="trainning-description">
            {this.state.training?.description}
          </div>          
        </div>
      )
    }
  }

export default TrainningDescription;