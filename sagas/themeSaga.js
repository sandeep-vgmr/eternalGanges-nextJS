import { put } from 'redux-saga/effects';
import themeApi from "../services/loginApi";
import { RESPONSE_THEME, FAILED_THEME } from '@/redux/types/theme';
let api = new themeApi();

export function* themeSaga({ payload, resolve }) {
    try {
        // yield put({ type: RESPONSE_THEME, isLoading: true })
        let data = yield api.Theme(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_THEME, payload: data.theme })
            resolve && resolve(data)
            // yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            console.log("FAILED_THEME", data);
            yield put({ type: FAILED_THEME, payload: data })
            resolve && resolve(data)
            // yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FAILED_THEME, payload: e })

    }
}