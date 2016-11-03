import React, { Component } from 'react';
import Tile from './components/Tile.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    let boardIndex = 0
    let colsTmp = this.props.book.boards[boardIndex].cols
    let rowsTmp = this.props.book.boards[boardIndex].rows

    this.state = {
      boardIndex: boardIndex,
      board: this.props.book.boards[boardIndex],
      rowHeight: Math.round((window.innerHeight-60)/rowsTmp),
      colWidth: Math.round(window.innerWidth/colsTmp),
      cols: colsTmp,
      rows: rowsTmp
    };

    // console.log(
    //   this.state.board.tiles
    //     .filter(function(val,index){ return index < (this.state.cols * this.state.rows) })
    // )
  }

  render() {
    var _this = this;
    return (
      <div className="App">
        {
          this.state.board.tiles
            .filter(function(val,index){  return index < (_this.state.cols * _this.state.rows); })
            .map(tile => (
              <Tile specs={tile} maxHeight={this.state.rowHeight - 20} maxWidth={this.state.colWidth - 20} />
            ))
          }
      </div>
    );
    // for(let i = 0; i < (this.state.cols * this.state.rows); i++){
    //   <Tile specs={button} maxHeight={this.state.rowHeight - 20} maxWidth={this.state.colWidth - 20} />
    // }
    //   this.props.book.boards[this.state.boardIndex].button.map(button => (
    //   <Tile specs={button} maxHeight={this.state.rowHeight - 20} maxWidth={this.state.colWidth - 20} />
    // ))
  }
}

export default App;
