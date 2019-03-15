import * as React from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';

const D3Bubble = {
  create: (el, data, config) => {
  },
  update: (el, data, config, chart) => {
  },
  destroy: (el) => {
  },
};

export class BubbleChart extends React.Component {
  componentDidMount() {
    this._chart = D3Bubble.create(
      this._rootNode,
      this.props.data,
      {},
    );
  }

  componentDidUpdate() {
    D3Bubble.update(
      this._rootNode,
      this.props.data,
      {},
      this._chart,
    );
  }

  componentWillUnmount() {
    D3Bubble.destroy(this._rootNode);
  }

  _setRef(componentNode) {
    this._rootNode = componentNode;
  }

  render() {
    return (
      <div className="bubble-container" ref={this._setRef.bind(this)} />
    );
  }
}
