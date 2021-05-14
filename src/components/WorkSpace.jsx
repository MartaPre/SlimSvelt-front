import React from 'react';
// import FooterImp from './FooterImp';
import Route from 'react-router-dom/Route'
import { BrowserRouter } from 'react-router-dom'
import Nav from "./NavBar"
import Trainnings from '../pages/trainnings'
import Home from '../pages/home'
import Recipes from '../pages/recipes';
import myTrainning from '../pages/myTrainning';
import Diet from '../pages/myDiet';
import TrainningDescription from '../pages/trainningDescription';
import RecipeDescription from '../pages/recipeDescription';



class WorkSpace extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
      const actualUser = localStorage.getItem('user');
      if(actualUser !== undefined && actualUser !== "undefined"){
        this.setState({user: JSON.parse(actualUser)})
      }
    }
    componentWillReceiveProps = () => {
      const actualUser = localStorage.getItem('user');
      if(actualUser !== undefined && actualUser !== "undefined"){
        this.setState({user: JSON.parse(actualUser)})
      }      
    }
    render() {        
      return (
        <>
            <BrowserRouter>
                <div>
                    <Nav togglePopup={this.props.togglePopup} />
                    <Route path='/'  exact='true' render={(props) => (<Home {...props} togglePopup={this.props.togglePopup} logOut={this.props.logOut} user={this.state.user}/>)}/>                    
                    <Route path='/inicio' render={(props) => (<Home {...props} togglePopup={this.props.togglePopup} logOut={this.props.logOut} user={this.state.user}/>)}/>                    
                    <Route path="/entrenamientos" component={Trainnings} user={this.state.user}/>
                    <Route path="/recetas" component={Recipes} user={this.state.user}/>
                    <Route path="/mientrenamiento" component={myTrainning} user={this.state.user}/>
                    <Route path="/midieta" component={Diet} user={this.state.user}/>
                    <Route path="/trainningDescription" component={TrainningDescription} user={this.state.user}/>
                    <Route path="/recipeDescription" component={RecipeDescription} user={this.state.user}/>
                </div>
            </BrowserRouter>
            {/* <FooterImp/> */}
        </>
      )
    }
  }

export default WorkSpace;
