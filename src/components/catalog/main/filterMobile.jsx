import React from "react";
// import '../mainPage.scss';

import { Link } from "react-router-dom";

export class FilterMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Menu-logo" onClick={this.props.handle}>
        <span>Filter</span>
      </div>
    );
  }
}
