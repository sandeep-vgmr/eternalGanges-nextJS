import { put } from 'redux-saga/effects';
import { FAILED_CATEGORIES_DATA, FAILED_SUB_CATEGORIES, 
    RESPONSE_CATEGORIES_DATA, RESPONSE_SUB_CATEGORIES } from '../redux/types/categoriesType';

import loginApi from "../services/loginApi";
import { RESET_LOADER, START_LOADING } from '../redux/types/loader';
import { saveState } from '../utils/localstorage';
let api = new loginApi();

export function* categoriesSaga({ payload, resolve }) {

    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.Categories(payload);
        if (data.status === 200) {
            saveState("category", data.data)
            yield put({ type: RESPONSE_CATEGORIES_DATA, payload: data.data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            console.log("FAILED_CATEGORIES_DATA", data);
            yield put({ type: FAILED_CATEGORIES_DATA, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FAILED_CATEGORIES_DATA, payload: e })

    }
}

export function* subCategoriesSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.SubCategories(payload);
        if (data.status === 200) {
            yield put({ type: RESPONSE_SUB_CATEGORIES, payload: data.data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: FAILED_SUB_CATEGORIES, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FAILED_SUB_CATEGORIES, payload: e })

    }
}

