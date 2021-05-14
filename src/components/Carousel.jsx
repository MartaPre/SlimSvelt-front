import React, { Component } from "react";
import ReactCardCarousel from "react-card-carousel";

class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
    //   position: "absolute",
    //   height: "33vh",
    //   width: "100%",
    //   display: "flex",
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      display: "flex",
      height: "200px",
      width: "200px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }

  render() {
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
          <div style={MyCarousel.CARD_STYLE}>
                <img src="/images/arco.jpg" alt="" />            
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <img src="/images-food/barritas.jpg" alt="" />            
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <img src="/images/pilates.jpg" alt="" />   
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <img src="/images-food/pasta.jpg" alt="" />   
          </div>
          <div style={MyCarousel.CARD_STYLE}>
          <img src="/images/yoga.jpg" alt="" />   
          </div>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default MyCarousel;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyCarousel />, rootElement);