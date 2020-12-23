import { ACTIONS } from './actionCreator';

const INIT_STATE = {
    openCart: false,
    products: [],
    shopProducts: [],
    totalPrice: 0
}

export function reducer(state = INIT_STATE, action) {

    return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload)
}

const ACTION_HANDLERS = {
    [ACTIONS.TOGGLE_SHOWCART]: handleShowCart,
    [ACTIONS.GET_PRODUCTS]: handleGetProducts,
    [ACTIONS.CLOSE_OVERLAY]: handleCloseOverlay,
    [ACTIONS.ADD_TO_CART]: handleAddToCart,
    [ACTIONS.CLEAR_OVERLAY]: handleClearOverlay,
    [ACTIONS.REMOVE_PRODUCT]: handleRemoveProduct
}

function handleShowCart(state, payload) {
    return {
        ...state,
        openCart: true        
    }
}
function handleGetProducts(state, payload) {
    return {
        ...state,
        products: payload
    }
}
function handleCloseOverlay(state) {
    return {
        ...state,
        openCart: false
    }
}
function handleAddToCart(state, payload) {
    
    let sum = state.totalPrice;
    sum += payload.price
    return {
        ...state,
        shopProducts: [...state.shopProducts, {payload}],
        totalPrice: sum
    }   
}
function handleClearOverlay(state) {
    return {
        ...state,
        shopProducts: [],
        openCart: false,
        totalPrice: 0
    }
}
function handleRemoveProduct(state, payload) {
    let temp = [...state.shopProducts];
    let remove = temp.filter(item => item.payload.id !== payload.id); 
    let minus = state.totalPrice;
    minus -= payload.productPrice;
    
    return {
        ...state,
        shopProducts: remove,
        totalPrice: minus
    }
}