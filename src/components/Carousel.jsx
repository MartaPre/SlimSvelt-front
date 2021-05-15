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
          <a style={MyCarousel.CARD_STYLE} href="/entrenamientos">
                <img src="/images/arco.jpg" alt=""/>            
          </a>
          <a style={MyCarousel.CARD_STYLE}  href="/recetas">
            <img src="/images-food/barritas.jpg" alt=""/>            
          </a>
          <a style={MyCarousel.CARD_STYLE}  href="/entrenamientos">
            <img src="/images/pilates.jpg" alt=""/>   
          </a>
          <a style={MyCarousel.CARD_STYLE}  href="/recetas">
            <img src="/images-food/pasta.jpg" alt=""/>   
          </a>
          <a style={MyCarousel.CARD_STYLE}  href="/entrenamientos">
            <img src="/images/yoga.jpg" alt=""/>   
          </a>
        </ReactCardCarousel>
      </div>
    );
  }
}
export default MyCarousel;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MyCarousel />, rootElement);