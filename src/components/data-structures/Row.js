import React from 'react';
import { Rect } from 'react-konva';
import Data from './Data';

export default class Row extends React.Component {
  render() {
    return (
      <React.Fragment>
        {new Array(2).fill(null).map((val, index) => {
          return (
            <Data
              key={index}
              x={this.props.x + index * 200}
              y={this.props.y + this.props.displacement * 50}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
