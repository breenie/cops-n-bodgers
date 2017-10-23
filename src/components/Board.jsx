import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderBoard() {
    let rows = this.props.squares.reduce((acc, item, idx) => {
      let group = acc.pop();
      if (3 === group.length) {
        acc.push(group);
        group = [];
      }
      group.push(idx);
      acc.push(group);
      return acc;
    }, [[]]);

    return rows.map((item) => {
      return (
        <div className="board-row">
          {item.map(x => {
            return this.renderSquare(x);
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }
}

export default Board;