import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      divStyle: {
        height: props.maxHeight.toString() + "px",
        width: (props.maxWidth - 10).toString() + "px"
      },
      imagePath: props.specs.imagePath
    };

    this.onLoad = this.onLoad.bind(this);
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
