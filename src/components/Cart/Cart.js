import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for ( const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
             <h3>Order Summary</h3>
             <h5>Items Order:{props.cart.length}</h5>
             <p>Total Price:{total}</p>
             {
                 cart.map(newMap => <li>{newMap.name}</li>)
             }

            
        </div>
    );
};

export default Cart;