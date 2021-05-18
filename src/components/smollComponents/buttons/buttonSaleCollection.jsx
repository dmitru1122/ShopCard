import React from 'react';
import './buttons.scss';
import { Link } from 'react-router-dom';

function ButtonSale(props) {
    return (
        <div className="button-sale">
        <Link to='/catalog/forAll'
        alt="All sale" title="All sale">Look at the models</Link>
        </div>
    )

}

export default ButtonSale;