import React from "react";
// import SeconalSale from '../smollComponents/';
// import buttonSaleCollection from '../../smollComponents/buttons/buttonSaleCollection';
import ButtonSale from "../../smollComponents/buttons/buttonSaleCollection";
// import SaleImage from '../images/shoes/saleHead.png'
import lp from "../../images/shoes/onSale600.png";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions/index";

import saleImage from "../../images/shoes/onSale.png";

function SaleName(props) {
  return (
    <div className="fp-main-sale-name ">
      <div className="sale-type">Winter sale</div>
      <div className="sale-header">Sale up to 90%</div>
      <div>
        <ButtonSale />
      </div>
    </div>
  );
}

function SaleModel(props) {
  // let oldPrice = '100';
  // let price = '80 P';
  return (
    <div className="fp-main-sale-model background-image">
      <div className="sale-image">
        <img src={saleImage} />
      </div>

      <div className="sale-price">
        <div className="old-price text1-7">100</div>
        <div className="new-price">80</div>
      </div>

      {/* <div><img src={lp} /></div> */}
    </div>
  );
}

function MainBlock() {
  let classProperty = "flex-2-1-block";
  return (
    <div className="first-page-main ">
      <SaleName classProperty={classProperty} />
      <SaleModel classProperty={classProperty} />
    </div>
  );
}

function FirstPage(props) {
  return (
    <div className={props.styleClass}>
      <article className="first-page content">
        <MainBlock />
      </article>
    </div>
  );
}

export default FirstPage;
