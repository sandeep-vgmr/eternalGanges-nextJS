import { put } from 'redux-saga/effects';
import { ADD_TO_CART_RESPONSE, ADD_TO_CART_FAILED, REMOVE_TO_CART_RESPONSE, 
    REMOVE_TO_CART_FAILED, LIST_TO_CART_RESPONSE, LIST_TO_CART_FAILED, UPDATE_CART_RESPONSE, UPDATE_CART_FAILED, CART_RESPONSE, CART_FAILED } from '../redux/types/addtocart';
import loginApi from "../services/loginApi";
import { RESET_LOADER, START_LOADING } from '@/redux/types/loader';
let api = new loginApi();

export function* addToCartSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.AddToCart(payload);
        if (data.status === 200) {
            yield put({ type: ADD_TO_CART_RESPONSE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            console.log("ADD_TO_CART_FAILED", data);
            yield put({ type: ADD_TO_CART_FAILED, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: ADD_TO_CART_FAILED, payload: e })

    }
}

export function* removeToCartSaga({ payload, resolve }) {
    try {
        let data = yield api.DeleteToCart(payload);
        if (data.status === 200) {
            yield put({ type: REMOVE_TO_CART_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("REMOVE_TO_CART_FAILED", data);
            yield put({ type: REMOVE_TO_CART_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: REMOVE_TO_CART_FAILED, payload: e })

    }
}


export function* listToCartSaga({ payload, resolve }) {
    try {
        let data = yield api.ListToCart(payload);
        if (data.status === 200) {
            yield put({ type: LIST_TO_CART_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("LIST_TO_CART_FAILED", data);
            yield put({ type: LIST_TO_CART_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: LIST_TO_CART_FAILED, payload: e })

    }
}


export function* updateCartSaga({ payload, resolve }) {
    try {
        let data = yield api.UpdateCart(payload);
        if (data.status === 200) {
            yield put({ type: UPDATE_CART_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("UPDATE_CART_FAILED", data);
            yield put({ type: UPDATE_CART_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: UPDATE_CART_FAILED, payload: e })

    }
}


export function* clearCartSaga({ payload, resolve }) {
    try {
        let data = yield api.ClearCart(payload);
        if (data.status === 200) {
            yield put({ type: CART_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("CART_FAILED", data);
            yield put({ type: CART_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: CART_FAILED, payload: e })
    }
}
