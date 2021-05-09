import React from 'react';


class TrainningDescription extends React.Component {
    constructor() {
      super();
      this.state = {};
    }
    componentDidMount = () => {
        console.log(window.location.pathname); 
        const path = window.location.pathname.split('/')
        fetch('http://localhost:8000/trainning/' + path[2]+ '/' + path[3])
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState({ training: data[0] })
        });

    }

    render() {
        
      return (
        <>
         {this.state.training?.description}
        </>
      )
    }
  }

export default TrainningDescription;