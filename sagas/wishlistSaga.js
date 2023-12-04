import { put } from 'redux-saga/effects';
import { ADD_TO_WISHLIST_RESPONSE, ADD_TO_WISHLIST_FAILED, WISHLIST_LIST_RESPONSE, WISHLIST_LIST_FAILED, REMOVE_TO_WISHLIST_RESPONSE, REMOVE_TO_WISHLIST_FAILED, } from '../redux/types/addtocart';
import loginApi from "../services/loginApi";
let api = new loginApi();

export function* addToWishlistSaga({ payload, resolve }) {
    try {
        let data = yield api.AddToWishlist(payload);
        if (data.status === 200) {
            yield put({ type: ADD_TO_WISHLIST_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("ADD_TO_WISHLIST_FAILED", data);
            yield put({ type: ADD_TO_WISHLIST_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADD_TO_WISHLIST_FAILED, payload: e })

    }
}


export function* listWishlistSaga({ payload, resolve }) {
    try {
        let data = yield api.ListToWishlist(payload);
        if (data.status === 200) {
            yield put({ type: WISHLIST_LIST_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("WISHLIST_LIST_FAILED", data);
            yield put({ type: WISHLIST_LIST_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: WISHLIST_LIST_FAILED, payload: e })

    }
}


export function* removeWishlistSaga({ payload, resolve }) {
    try {
        let data = yield api.RemoveToWishlist(payload);
        if (data.status === 200) {
            yield put({ type: REMOVE_TO_WISHLIST_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("REMOVE_TO_WISHLIST_FAILED", data);
            yield put({ type: REMOVE_TO_WISHLIST_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: REMOVE_TO_WISHLIST_FAILED, payload: e })

    }
}