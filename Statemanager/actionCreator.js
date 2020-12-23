export const ACTIONS = {
    TOGGLE_SHOWCART: 'TOGGLE_SHOWCART',
    GET_PRODUCTS: 'GET_PRODUCTS',
    CLOSE_OVERLAY: 'CLOSE_OVERLAY',
    ADD_TO_CART: 'ADD_TO_CART',
    CLEAR_OVERLAY: 'CLEAR_OVERLAY',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT'
}

export const showCartAction = () => ({ type: ACTIONS.TOGGLE_SHOWCART })
export const getProductItems = data => ({ type: ACTIONS.GET_PRODUCTS, payload: data })
export const closeOverlayAction = () => ({ type: ACTIONS.CLOSE_OVERLAY })
export const addToCartAction = ({ productName, img, price, id }) => ({ type: ACTIONS.ADD_TO_CART, payload: ({ productName, img, price, id }) })
export const clearOverlay = () => ({ type: ACTIONS.CLEAR_OVERLAY })
export const removeProductItem = (id, productPrice) => ({ type: ACTIONS.REMOVE_PRODUCT, payload: {id, productPrice} })