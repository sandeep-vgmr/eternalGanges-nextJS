import * as type from '../types/productsType';


const initialState = {
    products : null,
    productDetails:null,
    newarrival : null,
    bestselling : null,
    featuredproducts: null,
    finter_options: null,
    shopForMen: null, 
    shopForWomen: null,
    homeDecoret: null,
    error : null,
}

const productsReducer = (state = initialState, action) => {

    switch (action.type) {
        case type.RESPONSE_PRODUCTS_DATA :{
            const { product } = action.payload
            const filterproduct = filterProducts(product)
            const { newarrival, bestselling, featuredproducts, shopForWomen, shopForMen, homeDecoret } = filterproduct
            return {...state, products: product, newarrival, bestselling, featuredproducts, shopForWomen, shopForMen, homeDecoret };
        }
        case type.FAILED_PRODUCTS_DATA :{
            return {...state, error: action.payload, products: [] };
        }
        case type.RESPONSE_NEW_ARRIVAL_PRODUCT :{
            return {...state, filterProduct: action.payload.product };
        }
        case type.FAILED_NEW_ARRIVAL_PRODUCT :{
            return {...state, error: action.payload, filterProduct: [] };
        }
        case type.RESPONSE_FILTER_PRODUCTS_DATA :{
            return {...state, finter_options: action.payload };
        }
        case type.FAILED_FILTER_PRODUCTS_DATA :{
            return {...state, error: action.payload, finter_options: [] };
        }
        case type.RESPONSE_PRODUCTS_DETAILS :{
            const { product } = action.payload
            return {...state, productDetails: product };
        }
        case type.FAILED_PRODUCTS_DETAILS :{
            return {...state, error: action.payload, productDetails: null };
        }
        default:
            return state;
    }
}
    

export default productsReducer;



const filterProducts = (products) => {
    let newarrival = [];
    let bestselling = [];
    let featuredproducts = [];
    let shopForMen = [];
    let shopForWomen = [];
    let homeDecoret = [];

    products?.forEach((ele) => {
        const { product_flag, shopFor, product_category } = ele
        Array.isArray(product_flag) && 
        product_flag?.forEach((item) => {
            if(item === "New Arrivals") {
                newarrival.push(ele);
            } else if (item === "Best Selling") {
                bestselling.push(ele);
            } else if (item === "Featured Products") {
                featuredproducts.push(ele);
            }
        })
        Array.isArray(shopFor) && 
        shopFor?.forEach((item) => {
            if(item.name === "Women") {
                shopForWomen.push(ele);
            } else if (item.name === "Men") {
                shopForMen.push(ele);
            }
        })
        Array.isArray(product_category) && 
        product_category?.forEach((item) => {
            if(item.productCategorySlug === "home-d-cor") {
                homeDecoret.push(ele);
            }
        })
    }); 
    return { newarrival, bestselling, featuredproducts, shopForWomen, shopForMen, homeDecoret }
}