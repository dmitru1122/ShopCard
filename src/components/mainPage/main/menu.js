import React from "react";
// import '../mainPage.scss';

import { Link } from "react-router-dom";

export class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Menu-logo" onClick={this.props.handle}>
        <span>Menu</span>
      </div>
    );
  }
}

export function MenuFragment(props) {
  return (
    <nav className="Menu-collection">
      <div className="Menu-header">Menu</div>

      <div className="Link-to-collection">
        {" "}
        Woman collection
        <Link to="/catalog/forJeans">
          <div>Jeans</div>
        </Link>
        <Link to="/catalog/forJacket">
          <div>Jacket</div>
        </Link>
        <Link to="/catalog/forShirt">
          <div>Shirt</div>
        </Link>
        <Link to="/catalog/forShoes">
          <div>Shoes</div>
        </Link>
      </div>

      <div className="Link-to-collection">
        {" "}
        Man collection
        <Link to="/catalog/forJeans">
          <div>Jeans</div>
        </Link>
        <Link to="/catalog/forJacket">
          <div>Jacket</div>
        </Link>
        <Link to="/catalog/forDresses">
          <div>Dress</div>
        </Link>
        <Link to="/catalog/forShoes">
          <div>Shoes</div>
        </Link>
      </div>
    </nav>
  );
}
