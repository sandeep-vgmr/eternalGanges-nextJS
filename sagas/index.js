import { takeEvery, all } from 'redux-saga/effects';
import { ADD_TO_CART, ADD_TO_WISHLIST, CLEAR_TO_CART, LIST_TO_CART, REMOVE_TO_CART, REMOVE_TO_WISHLIST, UPDATE_CART, WISHLIST_LIST } from '../redux/types/addtocart';
import { FETCH_CATEGORIES_DATA, FETCH_SUB_CATEGORIES } from '../redux/types/categoriesType';
import { FETCH_REF_TOKEN, GENERATE_OTP, LOGIN, USER_OTP_VERIFICATION } from '../redux/types/loginType';
import { FETCH_FILTER_PRODUCTS_DATA, FETCH_NEW_ARRIVAL_PRODUCT, FETCH_PRODUCTS_DATA, FETCH_PRODUCTS_DETAILS } from '../redux/types/productsType';
import { FETCH_MASTER, FETCH_USER, USER_REGISTER } from '../redux/types/registerType';
import { addToCartSaga, clearCartSaga, listToCartSaga, removeToCartSaga, updateCartSaga } from './addToCartSaga';
import { categoriesSaga, subCategoriesSaga } from './categoriesSaga';

import { loginSaga, otpVerificationSaga, refreshTokenSaga, sendUserOtpSaga } from './login' 
import { filterProductSaga, newArrivalProductSaga, productDetailsSaga, productsSaga } from './productsSaga';
import { masterSaga, registerSaga, userSaga } from './registerSaga';
import { ADD_ADDRESS, APPLY_COUPON, EETCH_ADDRESS, FETCH_CITY, FETCH_COUNTRY_DATA, FETCH_COUPON_LIST, REMOVE_ADDRESS, UPDATE_ADDRESS } from '../redux/types/addressType';
import { addressListSaga, addressRemoveSaga, addressSaga, addressUpdateSaga, applyCouponSaga, cityDataSaga, countryAndStateSaga, couponSaga } from './addressSaga';
import { addToWishlistSaga, listWishlistSaga, removeWishlistSaga } from './wishlistSaga';
import { FETCH_CHECKOUT } from '../redux/types/checkout';
import { checkoutSaga } from './checkoutSaga';
import { themeSaga } from './themeSaga';
import { FETCH_THEME } from '@/redux/types/theme';


function* rootSaga() {
    yield all([
        takeEvery(LOGIN, loginSaga ),
        takeEvery(FETCH_REF_TOKEN, refreshTokenSaga ),
        takeEvery(GENERATE_OTP, sendUserOtpSaga ),
        takeEvery(USER_REGISTER, registerSaga ),
        takeEvery(USER_OTP_VERIFICATION, otpVerificationSaga ),
        takeEvery(FETCH_USER, userSaga ),
        takeEvery(FETCH_CATEGORIES_DATA, categoriesSaga ),
        takeEvery(FETCH_SUB_CATEGORIES, subCategoriesSaga ),
        takeEvery(FETCH_PRODUCTS_DATA, productsSaga ),
        takeEvery(FETCH_NEW_ARRIVAL_PRODUCT, newArrivalProductSaga ),
        takeEvery(FETCH_FILTER_PRODUCTS_DATA, filterProductSaga ),
        takeEvery(ADD_TO_CART, addToCartSaga ),
        takeEvery(REMOVE_TO_CART, removeToCartSaga ),
        takeEvery(LIST_TO_CART, listToCartSaga ),
        takeEvery(UPDATE_CART, updateCartSaga ),
        takeEvery(FETCH_PRODUCTS_DETAILS, productDetailsSaga ),
        takeEvery(ADD_ADDRESS, addressSaga ),
        takeEvery(FETCH_COUPON_LIST, couponSaga ),
        takeEvery(EETCH_ADDRESS, addressListSaga ),
        takeEvery(REMOVE_ADDRESS, addressRemoveSaga ),
        takeEvery(UPDATE_ADDRESS, addressUpdateSaga ),
        takeEvery(CLEAR_TO_CART, clearCartSaga ),
        takeEvery(APPLY_COUPON, applyCouponSaga ),
        takeEvery(ADD_TO_WISHLIST, addToWishlistSaga ),
        takeEvery(WISHLIST_LIST, listWishlistSaga ),
        takeEvery(FETCH_CHECKOUT, checkoutSaga),
        takeEvery(FETCH_COUNTRY_DATA, countryAndStateSaga),
        takeEvery(FETCH_CITY, cityDataSaga),
        takeEvery(REMOVE_TO_WISHLIST, removeWishlistSaga),
        takeEvery(FETCH_MASTER, masterSaga),
        takeEvery(FETCH_THEME, themeSaga),
    ]);
}

export default rootSaga;