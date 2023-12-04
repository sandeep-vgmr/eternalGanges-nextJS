import { put } from 'redux-saga/effects';
import { ADD_ADDRESS_RESPONSE, ADD_ADDRESS_FAILED, COUPON_LIST_RESPONSE, COUPON_LIST_FAILED, 
    ADDRESS_LIST_RESPONSE, ADDRESS_LIST_FAILED, ADDRESS_REMOVE_RESPONSE, ADDRESS_REMOVE_FAILED, 
    ADDRESS_UPDATE_RESPONSE, ADDRESS_UPDATE_FAILED, APPLY_COUPON_RESPONSE, APPLY_COUPON_FAILED,
    FETCH_COUNTRY_DATA_RESPONSE, FETCH_COUNTRY_DATA_FAILED, FETCH_CITY_RESPONSE, FETCH_CITY_FAILED } from '../redux/types/addressType';
import loginApi from "../services/loginApi";
let api = new loginApi();

export function* addressSaga({ payload, resolve }) {
    try {
        let data = yield api.Address(payload);
        if (data.status === 200) {
            yield put({ type: ADD_ADDRESS_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("ADD_ADDRESS_FAILED", data);
            yield put({ type: ADD_ADDRESS_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADD_ADDRESS_FAILED, payload: e })

    }
}

export function* addressListSaga({ payload, resolve }) {
    try {
        let data = yield api.AddressList(payload);
        if (data.status === 200) {
            yield put({ type: ADDRESS_LIST_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("ADDRESS_LIST_FAILED", data);
            yield put({ type: ADDRESS_LIST_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADDRESS_LIST_FAILED, payload: e })

    }
}

export function* addressRemoveSaga({ payload, resolve }) {
    try {
        let data = yield api.AddressRemove(payload);
        if (data.status === 200) {
            yield put({ type: ADDRESS_REMOVE_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("ADDRESS_REMOVE_FAILED", data);
            yield put({ type: ADDRESS_REMOVE_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADDRESS_REMOVE_FAILED, payload: e })

    }
}

export function* addressUpdateSaga({ payload, resolve }) {
    try {
        let data = yield api.AddressUpdate(payload);
        if (data.status === 200) {
            yield put({ type: ADDRESS_UPDATE_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("ADDRESS_UPDATE_FAILED", data);
            yield put({ type: ADDRESS_UPDATE_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADDRESS_UPDATE_FAILED, payload: e })

    }
}


export function* couponSaga({ payload, resolve }) {

    try {
        let data = yield api.CouponCode(payload);
        if (data.status === 200) {
            yield put({ type: COUPON_LIST_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("COUPON_LIST_FAILED", data);
            yield put({ type: COUPON_LIST_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: COUPON_LIST_FAILED, payload: e })

    }
}


export function* applyCouponSaga({ payload, resolve }) {

    try {
        let data = yield api.ApplyPromo(payload);
        if (data.status === 200) {
            yield put({ type: APPLY_COUPON_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("APPLY_COUPON_FAILED", data);
            yield put({ type: APPLY_COUPON_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: APPLY_COUPON_FAILED, payload: e })

    }
}


export function* countryAndStateSaga({ payload, resolve }) {

    try {
        let data = yield api.Country(payload);
        if (data.status === 200) {
            yield put({ type: FETCH_COUNTRY_DATA_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("FETCH_COUNTRY_DATA_FAILED", data);
            yield put({ type: FETCH_COUNTRY_DATA_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FETCH_COUNTRY_DATA_FAILED, payload: e })

    }
}

export function* cityDataSaga({ payload, resolve }) {

    try {
        let data = yield api.City(payload);
        if (data.status === 200) {
            yield put({ type: FETCH_CITY_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("FETCH_CITY_FAILED", data);
            yield put({ type: FETCH_CITY_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FETCH_CITY_FAILED, payload: e })

    }
}