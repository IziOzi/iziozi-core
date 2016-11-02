import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  constructor(props) {
    super(props);

    console.log(props.specs)
    this.state = {
    };
  }


  render() {
    return (
      <div className="io-button">
        <img key={this.props.specs.imagePath} src={this.props.specs.imagePath}
          width={this.props.maxWidth -10} height={this.props.maxHeight}
          alt=" "/>
      </div>
    );
  }
}

export default Button;
