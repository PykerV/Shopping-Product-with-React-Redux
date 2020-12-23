import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../Statemanager/actionCreator';

export default function Product({ productName, img, price, id }) {

    const dispatch = useDispatch();
    const { shopProducts, products } = useSelector(state => state);

    function addToCart() {
        dispatch(addToCartAction({ productName, img, price, id }));
        console.log(shopProducts);
        console.log(products);
    }
    return (
        <article className='product'>
            <div className='img-container'>
                <img className='product-img' src={img} alt={productName}/>
                <button className='bag-btn' onClick={addToCart}>Add to Cart</button>
                <h3>{productName}</h3>
            </div>  
        </article>
    )
}
