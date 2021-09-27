import React from 'react';
import './Product.css'

const Product = (props) => {

    // console.log(props)
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img} alt="" />
            </div>
            <div className="product-text">
                <h4>Name{name}</h4>
                <p><small>By: {seller}</small></p>
                <strong>Price: {price}</strong>
                <p> only {stock} left in stock - order soon</p>
                <button 
                    onClick={() => props.handleAddToCart(props.product)}
                className="bnt-regular"> <i class="fa fa-address-card" aria-hidden="true"></i> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;