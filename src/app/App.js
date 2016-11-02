import React, { Component } from 'react';
import Button from './component/Button.js'
import './App.css';

class App extends Component {

  imgRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
      var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
      return { width: srcWidth*ratio, height: srcHeight*ratio };
   }

  constructor(props) {
    super(props);
    console.log(window.innerHeight)
    console.log(window.innerWidth)
    let boardIndex = 0
    this.state = {
      boardIndex: boardIndex,
      rowHeight: Math.round((window.innerHeight-60)/this.props.book.boards[boardIndex].rows),
      colWidth: Math.round(window.innerWidth/this.props.book.boards[boardIndex].cols)
    };
  }

  render() {
    return (
      <div className="App">
        {this.props.book.boards[this.state.boardIndex].button.map(button => (
          <Button specs={button} maxHeight={this.state.rowHeight} maxWidth={this.state.colWidth} />
        ))}
      </div>
    );
  }
}

export default App;
