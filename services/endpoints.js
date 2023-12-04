//let url = "https://" + window.location.host + "/moslcms/cms/";
// let url = process.env.CMS_BASE_URL;

let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// let baseAPI = 'http://dxtechsol.com:8080/api/v1/';
// console.log(url, '<--urlEndpoint-->', baseAPI)

export const endpoints = {

    baseUrl,

    Theme: {
        theme:"/theme"
    },
    Login: {
        SendUserOtp: "/send-user-otp",
        VerifyUserOtp: "/verify-user-otp",
        LoginCheck: "/login_check",
        WhichMember: "/whichMember",
        refreshToken: "/token/refresh",
    },
    Register: {
        UserRegister: "/register",
        Master: "/master",
    },
    Category: {
        Categories: "/category",
        AcrylicFurniture: "/category",
    },
    Products: {
        product: "/product/?limit=1000",
        newArrivalProduct: "/product/?newArrival=1&special=1&recommended=0",
        filterProducts: "/product",
    },
    Cart: {
        addToCart: "/transaction/cart",
        deleteToCart: "/transaction/cart/delete",
        listToCart: "/transaction/cart/list",
        updateCart: "/transaction/cart/update",
        clearCart: "/transaction/cart/clear",
    },
    Wishlist: {
        addToWishlist: "/transaction/wishlist/add",
        deleteToWishlist: "/transaction/wishlist/delete",
        listToWishlist: "/transaction/wishlist",
    },
    Address: {
        address:"/address",
        addressUpdate:"/address/edit"
    },
    CouponCode: {
        ListPromo:"/transaction/list-promo",
        ApplyPromo:"/transaction/apply-promo"
    },
    ReviewCart: {
        checkoutReview:"/checkout-review",
    },
    Country: {
        countryAndState:"/location",
        city:"/city",
    }
}