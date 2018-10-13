import React from 'react';
import SquareNode from './SquareNode';
import { Group } from 'react-konva';

export default class List extends React.Component {
  state = {
    x: 0,
    y: 0,
    size: 10
  };

  render() {
    return (
      <Group draggable>
        {new Array(this.state.size).fill(null).map((val, index) => {
          return (
            <SquareNode
              key={index}
              displacement={index}
              x={this.state.x}
              y={this.state.y}
            />
          );
        })}
      </Group>
    );
  }
}
