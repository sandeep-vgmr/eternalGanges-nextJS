import { put,call } from 'redux-saga/effects';
import loginApi from "../services/loginApi";
import { push } from 'next/router'
import { GENERATE_OTP_SUCCESS,GENERATE_OTP_FAILDE, OTP_VERIFICATION_SUCCESS, 
        OTP_VERIFICATION_FAILDE, LOGIN_SUCCESS, LOGIN_FAILED, REF_TOKEN_RESPONSE, REF_TOKEN_FAILDE } from '../redux/types/loginType';
import { saveState } from '../utils/localstorage';
import { RESET_LOADER, START_LOADING } from '@/redux/types/loader';
let api = new loginApi();


export function* sendUserOtpSaga({ payload, resolve }) {
    try {
        let data = yield api.SendUserOtp(payload);
        if (data.status === 200) {
            yield put({ type: GENERATE_OTP_SUCCESS, payload: data })
            resolve && resolve(data)
        }
        else {
            resolve && resolve(data)
            yield put({ type: GENERATE_OTP_FAILDE, payload: data })
        }
    } catch (e) {
        yield put({ type: GENERATE_OTP_FAILDE, payload: e })

    }
}

export function* loginSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.LoginCheck(payload);
        if (data.status === 200) {
            const { data: res } = data
            saveState('token', res.token);
            saveState('refreshToken', res.refreshToken);
            saveState('expInToken', res.refresh_token_expiration);
            yield push('/');
            yield put({ type: LOGIN_SUCCESS, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: LOGIN_FAILED, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: LOGIN_FAILED, payload: e })

    }
}

export function* otpVerificationSaga({ payload, resolve }) {
    try {
        let data = yield api.VerifyUserOtp(payload);
        if (data.status === 200 ) {
            yield put({ type: OTP_VERIFICATION_SUCCESS, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: OTP_VERIFICATION_FAILDE, payload: data })
            resolve && resolve(data)

        }
    } catch (e) {
        yield put({ type: OTP_VERIFICATION_FAILDE, payload: e })

    }
}

export function* refreshTokenSaga({ payload, resolve }) {
    try {
        let data = yield api.RefreshToken(payload);
        if (data.status === 200) {
            yield put({ type: REF_TOKEN_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: REF_TOKEN_FAILDE, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: REF_TOKEN_FAILDE, payload: e })
    }
}