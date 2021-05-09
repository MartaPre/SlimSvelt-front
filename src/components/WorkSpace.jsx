import React from 'react';
import FooterImp from './FooterImp';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./NavBar"
import Trainnings from '../pages/trainnings'
import Home from '../pages/home'
import Recipes from '../pages/recipes';
import myTrainning from '../pages/myTrainning';
import Diet from '../pages/myDiet';
import TrainningDescription from '../pages/trainningDescription';



class WorkSpace extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    render() {        
      return (
        <>
            <BrowserRouter>
                <div>
                    <Nav togglePopup={this.props.togglePopup} />
                    <Route path='/'  exact='true' render={(props) => (<Home {...props} togglePopup={this.props.togglePopup} logOut={this.props.logOut} user={this.props.user}/>)}/>                    
                    <Route path='/inicio' render={(props) => (<Home {...props} togglePopup={this.props.togglePopup} logOut={this.props.logOut} user={this.props.user}/>)}/>                    
                    <Route path="/entrenamientos" component={Trainnings} />
                    <Route path="/recetas" component={Recipes} />
                    <Route path="/mientrenamiento" component={myTrainning} />
                    <Route path="/midieta" component={Diet} />
                    <Route path="/trainningDescription" component={TrainningDescription} />
                </div>
            </BrowserRouter>
            <FooterImp/>
        </>
      )
    }
  }

export default WorkSpace;
