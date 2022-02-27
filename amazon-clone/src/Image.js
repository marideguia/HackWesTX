import React from "react";
import './Images.css';
import BrushIcon from '@material-ui/icons/Brush';

function Image({image}) {
 
  return (
    <div className="image">
      <img src={image} alt="" />
      <div className="image__overlay">
        <div className="Brush">
          <BrushIcon/>
        </div>
      </div>
    </div>
  );
}

export default Image;