import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.css';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';
import List from './components/data-structures/List';
import LLNode from './components/data-structures/LLNode';
import GraphNode from './components/data-structures/GraphNode';
import GraphList from './components/data-structures/GraphList';
import Hashtable from './components/data-structures/Hashtable';

class App extends Component {
  constructor(props) {
    super(props);
    this.dss = {
      List: {
        propAttrs: ['values'],
        component: props => <List {...props} />
      },
      LLNode: { propAttrs: [], component: props => <LLNode {...props} /> },
      GraphNode: {
        propAttrs: [],
        component: props => <GraphNode {...props} />
      },
      GraphList: {
        propAttrs: ['values'],
        component: props => <GraphList {...props} />
      },
      Hashtable: {
        propAttrs: ['keyValuePairs'],
        component: props => <Hashtable {...props} />
      }
    };
  }

  render() {
    return (
      <Grid className={'whiteboard'} fluid>
        <Row>
          <Col xs={3}>
            <Sidebar dss={this.dss} createDS={this.createDS} />
          </Col>
          <Col xs={9}>
            <Whiteboard dss={this.dss} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
