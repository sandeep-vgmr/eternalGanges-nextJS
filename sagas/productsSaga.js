import { put } from 'redux-saga/effects';
import { FAILED_FILTER_PRODUCTS_DATA, FAILED_NEW_ARRIVAL_PRODUCT, 
    FAILED_PRODUCTS_DETAILS, FAILED_PRODUCTS_DATA, 
    RESPONSE_FILTER_PRODUCTS_DATA, 
    RESPONSE_NEW_ARRIVAL_PRODUCT, 
    RESPONSE_PRODUCTS_DATA, RESPONSE_PRODUCTS_DETAILS } from '../redux/types/productsType';


import loginApi from "../services/loginApi";
import { RESET_LOADER, START_LOADING } from '../redux/types/loader';
let api = new loginApi();

export function* productsSaga({ payload, resolve }) {
    try {
        let data = yield api.Products(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_PRODUCTS_DATA, payload: data.data })
            resolve && resolve(data)
        }
        else {
            console.log("FAILED_PRODUCTS_DATA", data);
            yield put({ type: FAILED_PRODUCTS_DATA, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FAILED_PRODUCTS_DATA, payload: e })

    }
}


export function* newArrivalProductSaga({ payload, resolve }) {
    try {
        let data = yield api.NewArrivalProduct(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_NEW_ARRIVAL_PRODUCT, payload: data.data })
            resolve && resolve(data)
        }
        else {
            console.log("FAILED_NEW_ARRIVAL_PRODUCT", data);
            yield put({ type: FAILED_NEW_ARRIVAL_PRODUCT, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FAILED_NEW_ARRIVAL_PRODUCT, payload: e })

    }
}


export function* filterProductSaga({ payload, resolve }) {
    try {
        let data = yield api.FilterProducts(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_FILTER_PRODUCTS_DATA, payload: data })
            resolve && resolve(data)
        }
        else { 
            console.log("FAILED_FILTER_PRODUCTS_DATA", data);
            yield put({ type: FAILED_FILTER_PRODUCTS_DATA, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FAILED_FILTER_PRODUCTS_DATA, payload: e })

    }
}


export function* productDetailsSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.ProductsDetails(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_PRODUCTS_DETAILS, payload: data.data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else { 
            console.log("FAILED_PRODUCTS_DETAILS", data);
            yield put({ type: FAILED_PRODUCTS_DETAILS, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FAILED_PRODUCTS_DETAILS, payload: e })

    }
}