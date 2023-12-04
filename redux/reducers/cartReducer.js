import * as type from "../types/addtocart"

const initialState = {
    cart : [],
    summary: null,
    carterr : [],
    cartLength : 0,
    wishlist : [],
    totalAmount: 0,
    grandTotalAfterDis: 0,
    grandDiscount: 0,
    wishlistlength : 0,
    isActive: true,
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case type.ADD_TO_CART_RESPONSE :{
            const { cart, count, summary } = action.payload.data;
            return{...state, cartLength: count, cart, summary }
        }
        case type.LIST_TO_CART_FAILED :{
            return{...state }
        }

        case type.LIST_TO_CART_RESPONSE :{
            const { cart, count, summary } = action.payload.data;
            let coun = count ? count : 0

            return{...state, cart, cartLength: coun, summary }
        }
        case type.LIST_TO_CART_FAILED :{
            return{...state, carterr: action.payload}
        }

        case type.CLEAR_TO_CART: {
            return { ...state, cart: [], cartLength: 0, totalAmount: 0, grandDiscount: 0, grandTotalAfterDis: 0 }
        }

        case type.WISHLIST_LIST_RESPONSE :{
            const {cart} = action.payload.data
            return {...state, wishlist: cart ? cart : [], wishlistlength : cart ? cart.length : 0 };
        }

        // case type.REMOVE_TO_WISHLIST: {
        //     const product = action.payload;
        //     const wishlist = state.wishlist;
        //     let new_items = wishlist.filter(item=> product.id !== item.id)
        //     return { ...state, wishlist: new_items, wishlistlength: new_items.length }
        // }

        case type.ACTIVE_CART_VIEW: {
            return { ...state, isActive: !state.isActive }
        }

        case type.UNIT_OF_PURCHASE: {
            let product = action.payload;
            let cart = state.cart;
            let updatedCart = updateProductUnits(cart,product);
            let totalAmount = grandAmountFun(updatedCart);
            return { ...state, cart: updatedCart, totalAmount }
        }
        default:
            return state
    }
}

export default cartReducer


const findProductIndex = (cart, productID) => {
    return cart.findIndex(p => p.id === productID);
};

const grandAmountFun = (cart) => {
    return cart.reduce((total,sum) => parseInt(total) + parseInt(sum.priceofProduct), 0 )
}

const totalDiscountAmt = (cart) => {
    return cart.reduce((total,sum) =>  parseInt(total) + parseInt(sum.totalDiscount) , 0 )
}

const totalAmtAfterDiscount = (cart) => {
    return cart.reduce((total,sum) =>  parseInt(total) + parseInt(sum.afterDiscountAmu) , 0 )
}

const updateProductUnits = (cart, product) => {
    const productIndex = findProductIndex(cart, product.id);
    const updatedCart = [...cart];
    const existingProduct = updatedCart[productIndex];
    const priceOfProduct = parseInt(existingProduct.units) * parseInt(product.price)
    let totDis = 0, afterDisAmt= 0, dis = product.discount, prodAmt = product.priceofProduct, totalDiscount = 0;

    if(product.hasOwnProperty("discount")){
        totDis = (parseFloat(prodAmt) * parseFloat(dis)) / 100;
        afterDisAmt = parseFloat(prodAmt) - parseFloat(totDis);
        totalDiscount = parseFloat(prodAmt) - afterDisAmt;
    }else{
        afterDisAmt = prodAmt;
        totalDiscount = 0;
    }
    
    afterDisAmt = parseFloat(prodAmt) - parseFloat(totDis);
    totalDiscount = parseFloat(prodAmt) - afterDisAmt;

    const updatedUnitsProduct = {
        ...existingProduct,
        unitOfPurchase: parseInt(product.unitOfPurchase),
        priceOfProduct: priceOfProduct,
        afterDiscountAmu: afterDisAmt,
        totalDiscount: totalDiscount
    };

    updatedCart[productIndex] = updatedUnitsProduct;

    return updatedCart;
};

const discount = (cart, product) => {
    const updatedCart = [...cart, product];
    updatedCart.forEach(item => {
        let totDis = 0;
        let afterDisAmt = 0;
        let dis = item.discount;
        let prodAmt = item.priceofProduct;
        if(item.hasOwnProperty("discount" ) ){
            totDis = (parseFloat(prodAmt) * parseFloat(dis)) / 100;
            afterDisAmt = parseFloat(prodAmt) - parseFloat(totDis)
            item.afterDiscountAmu = afterDisAmt; 
            item.totalDiscount = parseFloat(prodAmt) - afterDisAmt
        }else{
            item.afterDiscountAmu = prodAmt; 
            item.totalDiscount = 0
        }
        
    })
    return [ ...updatedCart]
}