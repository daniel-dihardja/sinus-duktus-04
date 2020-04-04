import React from 'react';
import './Slider.css';

export class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      label: props.label || 'identifier',
      value: props.value || 0,
      min: props.min || 0,
      max: props.max || 10
    };
  }

  handleChange(event) {
    this.setState({value: parseInt(event.target.value)});
    console.log(this.state);
  }

  render() {
    return <div className="slider">
      <span>{this.state.label}</span>
      <input type={"range"} value={this.state.value} min={this.state.min} max={this.state.max} onChange={e => this.handleChange(e)}/>
      <span>{this.state.value}</span>
    </div>
  }
}
