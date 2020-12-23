import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showCartAction } from '../Statemanager/actionCreator';
import logo from '../images/logo.svg';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';

export default function Navbar() {
    
    const dispatch = useDispatch();
    const { shopProducts } = useSelector(state => state);
    
    console.log(shopProducts);
    function showCart() {
        dispatch(showCartAction());
    }
    return (
        <nav className="navbar">
            <div className="navbar-center">
                    <span className="nav-icon">
                        <ViewWeekIcon />
                    </span>
                <img src={logo} alt="store logo" />
                <div className="cart-btn" onClick={showCart}>
                        <span className="nav-icon">
                        <AddShoppingCartIcon />
                        </span>
                <div id="cart-items" className="cart-items">{shopProducts > '0' ? shopProducts.length : null}</div>
                </div>
            </div>
        </nav>
        
    )
}
