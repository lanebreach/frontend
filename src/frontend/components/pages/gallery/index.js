import React from 'react';
import '../../../styles/grid.css';
import { Navigation } from '../../navigation';

import { LineChart } from './line-chart';
import { BubbleChart } from './bubble-chart';

const fetchData = (cb) => {
  const base_url = 'https://data.sfgov.org/resource/ihm3-5gmc.json'
  const url_filters = [['service_subtype', 'Blocking_Bicycle_Lane']]

  var url = base_url;
  for (var i = 0; i < url_filters.length; i++) {
    var sep = '&';
    if (i == 0) { sep = '?' }
    url += sep + url_filters[i][0] + '=' + url_filters[i][1];
  }
  
  return fetch(url)
    .then(results => {
      return results.json();
    })
    .then(data => cb(data));
};

export class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      currentChart: 'bubble',
      data: [],
    };

    this.switchChart = this.switchChart.bind(this);
  }

  componentDidMount() {
    fetchData((data) => {
      this.setState({data});
    })
  }

  switchChart(e) {
    this.setState({currentChart: e.target.id});
  }

  render() {
    let CurrentChart;

    switch(this.state.currentChart) {
      case 'bubble':
        CurrentChart = BubbleChart;
        break;
      case 'line':
        CurrentChart = LineChart;
        break;
      default:
        CurrentChart = BubbleChart;
    }

    return (
      <div>
        <Navigation/>
        <div className="container">
          <div style={{width: 300}}>
            visualization list
            <ul onClick={this.switchChart}>
              <li id="bubble">
                Bubble Chart
              </li>
              <li id="line">
                Line Chart
              </li>
            </ul>
          </div>
          <div style={{width: 800}}>
            <h2>{this.state.currentChart}</h2>
            <CurrentChart data={this.state.data} />
          </div>
        </div>
      </div>
    );
  }
}
