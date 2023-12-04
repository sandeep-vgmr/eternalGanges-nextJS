import * as type from '../types/addressType';

const initialState = {
    address : [],
    shippingData : [],
    couponData : [],
    countrys: [],
    states: [],
    city: [],

    lastOrderId : null,
    totalAmount: 0,
    grandDiscount: 0, 
    grandTotalAfterDis: 0
}

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADDRESS_LIST_RESPONSE :{
            const address = action.payload.data;    
            return {...state, address };
        }
        case type.ADDRESS_LIST_FAILED :{
            const address = action.payload.data;
            return {...state, address };
        }
        case type.COUPON_LIST_RESPONSE :{
            const { data } = action.payload;
            let coupon = data;
            coupon.map(item => item.isActive = false);
            return {...state, couponData: coupon };
        }
        case type.COUPON_LIST_FAILED :{
            return {...state, couponData: [] };
        }
        case type.APPLY_COUPON_RESPONSE :{
            const { data } = action.payload;
            console.log("Apply promocode on ", data)
            // let coupon = data;
            // coupon.map(item => item.isActive = false);
            // return {...state, couponData: coupon };
        }
        case type.APPLY_COUPON_FAILED :{
            return {...state };
        }
        case type.FETCH_COUNTRY_DATA_RESPONSE :{
            const {country, state: states} = action.payload.data
            return {...state, countrys:country, states }
        }
        case type.FETCH_COUNTRY_DATA_FAILED :{
            return {...state, countrys: [], states: [] }
        }
        case type.FETCH_CITY_RESPONSE :
            const {data} = action.payload
            return {...state, city:data }
        case type.FETCH_CITY_FAILED:
            return {...state, city:[] }

        case type.SHIPPING_DETAILS:{
            let shippingData = state.shippingData;
            const updatedShippingData = [...shippingData, action.payload];
            const orderProducts = finalProducts(updatedShippingData, state.lastOrderId);
            const totalAmount = grandAmountFun(orderProducts);
            const totalDiscount = totalDiscountAmt(orderProducts);
            const afterDisAmt = totalAmtAfterDiscount(orderProducts);
            return {...state, shippingData: updatedShippingData, totalAmount, grandDiscount: totalDiscount, grandTotalAfterDis: afterDisAmt };
        }

        case type.LAST_ORDER_ID:{
            return {...state, lastOrderId: action.payload };
        }

        default:
            return state
    }
}

export default addressReducer;

const findProductIndex = (address, id) => {
    return address.findIndex(p => p.id === id);
};


const updateAddressUnits = (address, addId) => {
    const productIndex = findProductIndex(address, addId.id);
    const updatedAddress = [...address];
    const existingAddress = updatedAddress[productIndex];
    
    const updatedUnitsProduct = {
        ...existingAddress,
        type : addId.selected,
        fullName : addId.fullName,
        email : addId.email,
        mobile : addId.mobile,
        stdcode : addId.stdcode,
        address : addId.address,
        optionalAddress : addId.optionalAddress,
        state : addId.state,
        city : addId.city,
        pincode : addId.pincode,
        officename : addId.officename,
        personName : addId.personName,
        otherField : addId.otherField
    };

    updatedAddress[productIndex] = updatedUnitsProduct;

    return updatedAddress;
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

const finalProducts = (cart,lastOrderId) => {
    let arr = null
    cart.map(item => {
        if(item.orderId === lastOrderId){
            arr = item.products
        }
    })
    return arr;
}