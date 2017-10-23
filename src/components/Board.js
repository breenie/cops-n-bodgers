import React from 'react';
import Square from './Square';

function renderSquare(i, value, onClick) {
  return (
    <Square
      key={i}
      value={value}
      onClick={() => onClick(i)}
    />
  );
}

function renderBoard(squares, onClick) {
  let rows = squares.reduce((acc, item, idx) => {
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
          return renderSquare(x, squares[x], onClick);
        })}
      </div>
    );
  });
}

class Board extends React.Component {
  render() {
    return (
      <div>
        {renderBoard(this.props.squares, this.props.onClick)}
      </div>
    );
  }
}

export default Board;