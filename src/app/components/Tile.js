import React, { Component } from 'react';
import '../platform-dependent/speechSynthesis.js';
import './Tile.css';

// import '../platform-dependent/config.js'

var imagesRoot = require('../platform-dependent/config.js').imagesRoot;

class Tile extends Component {

  constructor(props) {
    super(props);
    console.log(imagesRoot)
    this.state = {
      divStyle: {
        height: props.maxHeight.toString() + "px",
        width: (props.maxWidth - 10).toString() + "px"
      },
      imagePath: imagesRoot + props.specs.imagePath,
      sentence: props.specs.sentence
    };

    this.onLoad = this.onLoad.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  imgRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return { width: srcWidth*ratio, height: srcHeight*ratio };
   }

   onLoad(e){
     let img = e.currentTarget
     console.log(this)

     let size = this.imgRatioFit(img.width, img.height, this.props.maxWidth, this.props.maxHeight)
     img.width = size.width
     img.height = size.height
   }

   onClick(e){

   }

  render() {
    return (
      <div className="io-tile" style={this.state.divStyle}>
        <img key={this.state.imagePath} src={this.props.specs.imagePath}
            onLoad={this.onLoad}
          alt=" "/>
      </div>

    );
  }

}

export default Tile;
