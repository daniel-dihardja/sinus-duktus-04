import React from 'react';
import './Setup.css';
import {Slider} from "../slider/Slider";

export class Setup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div className="setup">
      <Slider label={"Wx"} min={0} max={100}></Slider>
      <Slider label={"Wy"} min={0} max={100}></Slider>
    </div>
  }
}
