import React from 'react';
import CartItem from './cartItem';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { closeOverlayAction, clearOverlay } from '../Statemanager/actionCreator';


export default function Cart() {

    const { openCart, shopProducts, totalPrice } = useSelector(state => state)

    console.log(shopProducts);

    const dispatch = useDispatch();

    function closeOverlay() {
        dispatch(closeOverlayAction());
    }
    function clearCloseOverlay() {
        dispatch(clearOverlay());
    }
    return (
        <>
        {openCart && <div>
             <div className="cart-overlay transparentBcg">
                 <div id="cart" className="cart showCart">
                     <button className="close-cart" onClick={closeOverlay}>X</button>
                     {/* <span className="close-cart" onClick="closeOverlay()">
                         <i className="fas fa-window-close"></i>
                     </span> */}
                     <h2>your cart</h2>
                     <div id="cart-content" className="cart-content">
                         <div className="cart-item">
                            {shopProducts.map(item => 
                                <CartItem 
                                    id={item.payload.id}
                                    key={item.payload.id} 
                                    img={item.payload.img} 
                                    product={item.payload.productName}
                                    productPrice={item.payload.price} 
                                />
                            )}
                         </div>
                     </div>
                     <div className="cart-footer">
                         <h3>your total : ${totalPrice}
                             <span id="cart-total" className="cart-total"></span>
                         </h3>
                         <button className="clear-cart banner-btn" onClick={clearCloseOverlay}>clear cart</button>
                     </div>
                 </div>
             </div>
         </div>}
         </> 
    )
}

 