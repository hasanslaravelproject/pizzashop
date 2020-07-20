import React from "react";
import SliderImage from "../../assets/images/office_image.jpg";

const Slider = (props) => {
  return (
    <img 
        src={SliderImage}
        alt="transattelecom" title="Slider: office"
        className="illustrate" 
        style={{maxHeight: '669px', width: '100%'}} />
  );
};

export default Slider;