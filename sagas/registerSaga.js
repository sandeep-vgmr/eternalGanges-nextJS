import { put } from 'redux-saga/effects';
import { setUser } from '../components/helper/method';
import { USER_REGISTER_SUCCESS, USER_REGISTER_FAILDE, FETCH_USER_RESPONSE, FETCH_USER_FAILDE,
    FETCH_MASTER_FAILDE, FETCH_MASTER_RESPONSE } from '../redux/types/registerType';
import loginApi from "../services/loginApi";
import { RESET_LOADER, START_LOADING } from '@/redux/types/loader';
let api = new loginApi();

export function* registerSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.Register(payload);
        if (data.status === 200) {
            yield put({ type: USER_REGISTER_SUCCESS, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            console.log("USER_REGISTER_FAILDE", data);
            yield put({ type: USER_REGISTER_FAILDE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: USER_REGISTER_FAILDE, payload: e })

    }
}


export function* userSaga({ payload, resolve }) {
    try {
        let data = yield api.WhichMember(payload);
        if (data.status === 200) {
            setUser("user", data.data)
            yield put({ type: FETCH_USER_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: FETCH_USER_FAILDE, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FETCH_USER_FAILDE, payload: e })

    }
}

export function* masterSaga({ payload, resolve }) {
    try {
        let data = yield api.Master(payload);
        if (data.status === 200) {
            yield put({ type: FETCH_MASTER_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            console.log("FETCH_MASTER_FAILDE", data);
            yield put({ type: FETCH_MASTER_FAILDE, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FETCH_MASTER_FAILDE, payload: e })

    }
}