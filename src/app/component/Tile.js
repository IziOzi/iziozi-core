import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  imgRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return { width: srcWidth*ratio, height: srcHeight*ratio };
   }

   onImgLoad(){


     return img;
   }

  constructor(props) {
    super(props);
    
    this.state = {
      divStyle: {
        height: props.maxHeight.toString() + "px",
        width: (props.maxWidth - 10).toString() + "px"
      }
    };

  }


  render() {
    return (
      <div className="io-button" style={this.state.divStyle}>
        <img key={this.props.specs.imagePath} src={this.props.specs.imagePath}
            onload={this.onImgLoad}
          alt=" "/>
      </div>

    );
  }

}

export default Button;
