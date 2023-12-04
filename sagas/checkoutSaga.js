import { put } from 'redux-saga/effects';
import { FETCH_CHECKOUT_SUCCESS, FETCH_CHECKOUT_FAILDE } from '../redux/types/checkout';
import loginApi from "../services/loginApi";
import { RESET_LOADER, START_LOADING } from '../redux/types/loader';

let api = new loginApi();

export function* checkoutSaga({ payload, resolve }) {

    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.CheckoutReview(payload);
        if (data.status === 200) {
            yield put({ type: FETCH_CHECKOUT_SUCCESS, payload: data.data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: FETCH_CHECKOUT_FAILDE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FETCH_CHECKOUT_FAILDE, payload: e })
    }
}