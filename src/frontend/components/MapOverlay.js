import React from "react";
import './MapOverlay.css';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
 ];

export default class MapOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      val: 0,
      month: months[0],
    }

  }

  handleChange = (event) => {

    this.setState({month: months[event.target.value]})
    this.props.onMonthChange(event.target.value);
  }


  render() {
    return (
      <div className='map-overlay top'>
        <div className='map-overlay-inner'>
        <label id='month'>{this.state.month}</label>
        <input id="slider" type="range" min="0" max="11" step="1" value={this.state.value} onChange={this.handleChange}/>
        </div>
      </div>
    );
  }
}
