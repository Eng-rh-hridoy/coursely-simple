import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Cart = (props) => {
    const CartsData = props.data;
    const Total = CartsData.reduce((total, course)=> total + course.price, 0);

    const ConvertNumber =(number)=>{
        let num = number.toFixed(2);
        Number(num);
        return num;
    }
    return (
        <div className="cart-area">
            <h3>Cart <FontAwesomeIcon icon={faShoppingCart} /> <sup>{CartsData.length}</sup></h3>
            <p>
                Total: ${ConvertNumber(Total)}
            </p>
            <button className = "btn btn-primary btn-lg fw-bold">Enroll Now</button>
        </div>
    );
};

export default Cart;