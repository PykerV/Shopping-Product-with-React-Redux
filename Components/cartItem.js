import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductItem } from '../Statemanager/actionCreator';
export default function CartItem({ img, product, productPrice, count, id }) {

    const dispatch = useDispatch();

    function removeProduct(id, productPrice) {
        dispatch(removeProductItem(id, productPrice));
    }
    return (
        <div className="cart-item">
            <img src={img} alt={product}/> 
            <div>
                <h4>{product}</h4>
                <h5>{productPrice}</h5>
                <span onClick={() => removeProduct(id, productPrice)}>remove</span>
            </div>
            {/* <div>
            <span>Count: {count}</span>
                <button>+</button>
                <button>-</button>
            </div> */}
        </div>
    )
}