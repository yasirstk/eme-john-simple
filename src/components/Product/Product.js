import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    //console.log(props.product); //here products are shown in log
    console.log(props); //here handleAddProduct and products both are jown in log
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                {/* <img src= {props.product.img} alt=""/> */}
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                {/* <h3>This is Product</h3> */}
                {/* <h4>{props.product.name}</h4> */}
                <h4 >{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p> $ {price}</p>
                <p><small>Only {stock} left in stock - order soon.</small></p>
                <button 
                    className = "main-btn"
                    onClick = {() => props.handleAddProduct(props.product)}

                    > <FontAwesomeIcon icon={ faShoppingCart } /> Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;