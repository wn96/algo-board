import React from "react";
import SquareNode from "./SquareNode";
import { Group } from "react-konva";
import { connect } from "react-redux";

class List extends React.Component {
  setText = index => {
    const newText = prompt(
      "Please enter new text",
      this.props.shapeState.values[index]
    );
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      values: Object.assign([], this.props.shapeState.values, {
        [index]: newText
      })
    });
  };

  remove = () => {
    this.ListGroup.removeChildren();
    this.props.updateState(this.props.shapeId, {
      ...this.props.shapeState,
      values: []
    });
  };

  render() {
    return (
      <Group
        draggable
        ref={ref => (this.ListGroup = ref)}
        onDragMove={e => {
          let binPosX = this.props.delArea.x - 130;
          let binPosY = this.props.delArea.y - 10;

          e.target.x() >= binPosX && e.target.y() >= binPosY
            ? this.remove()
            : this.props.updateState(this.props.shapeId, {
                ...this.props.shapeState,
                x: e.target.x(),
                y: e.target.y()
              });
        }}
      >
        {this.props.shapeState.values.map((val, index) => {
          return (
            <SquareNode
              key={index}
              displacement={index}
              x={this.props.shapeState.x}
              y={this.props.shapeState.y}
              // onClick={() => this.setText(index)}
              text={val}
            />
          );
        })}
      </Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  shapeState: state.konva.dataStructures[ownProps.shapeId]
});

const mapDispatchToProps = dispatch => ({
  updateState: (id, shapeState) =>
    dispatch({
      type: "UPDATE_SHAPE_STATE",
      payload: { shapeState, id: id.toString() }
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
