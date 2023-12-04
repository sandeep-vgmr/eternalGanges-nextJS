import Api from '.';
import { endpoints } from './endpoints';

// const token = localStorage.getItem("token")

export default class loginApi extends Api {

    SendUserOtp(data) {
        let url = this.buildUrl(endpoints.Login.SendUserOtp)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    VerifyUserOtp(data) {
        let url = this.buildUrl(endpoints.Login.VerifyUserOtp)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    Register(data) {
        let url = this.buildUrl(endpoints.Register.UserRegister)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    Master(data){
        let url = this.buildUrl(endpoints.Register.Master)
        return this.fetch(url, "GET", null, data).then(response => response)
    }

    LoginCheck(data) {
        let url = this.buildUrl(endpoints.Login.LoginCheck)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }
   
    WhichMember(data){
        let url = this.buildUrl(endpoints.Login.WhichMember)
        return this.fetch(url, "GET", null, data).then(response => response)
    }

    RefreshToken(data){
        let url = this.buildUrl(endpoints.Login.refreshToken)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    Categories(data){
        let url = this.buildUrl(endpoints.Category.Categories)
        return this.fetchNormal(url, "GET", null, data).then(response => response)
    }

    SubCategories(data){
        let url = this.buildUrl(endpoints.Category.AcrylicFurniture +`/${data}/?limit=1000`)
        return this.fetchNormal(url, "GET", null, data).then(response => response)
    }

    Products(data){
        let url = this.buildUrl(endpoints.Products.product)
        return this.fetchNormal(url, "GET", null, data).then(response => response)
    }

    NewArrivalProduct(data){
        let url = this.buildUrl(endpoints.Products.newArrivalProduct)
        return this.fetchNormal(url, "GET", null, data).then(response => response)
    }

    FilterProducts(data) {
        let url = this.buildUrl(endpoints.Products.filterProducts)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }

    AddToCart(data) {
        let url = this.buildUrl(endpoints.Cart.addToCart)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    DeleteToCart(data) {
        let url = this.buildUrl(endpoints.Cart.deleteToCart)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }


    ListToCart(data) {
        let url = this.buildUrl(endpoints.Cart.listToCart)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }


    ProductsDetails(data){
        let url = this.buildUrl(endpoints.Products.filterProducts)
        if(data.slug){
            return this.fetchParams(url, "GET", null, `/${data.slug}`).then(response => response)
        }
    }

    
    UpdateCart(data) {
        let url = this.buildUrl(endpoints.Cart.updateCart)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }


    ClearCart(data) {
        let url = this.buildUrl(endpoints.Cart.clearCart)
        return this.fetchNormal(url, "POST", JSON.stringify(data)).then(response => response)
    }


    Address(data) {
        let url = this.buildUrl(endpoints.Address.address)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }


    AddressList(data){
        let url = this.buildUrl(endpoints.Address.address)
        return this.fetch(url, "GET", null, data).then(response => response)
    }


    CouponCode(data){
        let url = this.buildUrl(endpoints.CouponCode.ListPromo)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }


    ApplyPromo(data){
        let url = this.buildUrl(endpoints.CouponCode.ApplyPromo)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }


    AddressRemove(data){
        let url = this.buildUrl(endpoints.Address.address)
        if(data.id){
            return this.fetchParams(url, "DELETE", null, `/${data.id}`).then(response => response)
        }
    }

    AddressUpdate(data){
        let url = this.buildUrl(endpoints.Address.addressUpdate)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    AddToWishlist(data){
        let url = this.buildUrl(endpoints.Wishlist.addToWishlist)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    RemoveToWishlist(data){
        let url = this.buildUrl(endpoints.Wishlist.deleteToWishlist)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
        
    }
    
    ListToWishlist(data){
        let url = this.buildUrl(endpoints.Wishlist.listToWishlist)
        return this.fetch(url, "POST", JSON.stringify(data)).then(response => response)
    }

    CheckoutReview(data){
        let url = this.buildUrl(endpoints.ReviewCart.checkoutReview)
        return this.fetch(url, "GET", null, data).then(response => response)
    }
    
    Country(data){
        let url = this.buildUrl(endpoints.Country.countryAndState)
        return this.fetch(url, "GET", null, data).then(response => response)
    }

    City(data){
        let url = this.buildUrl(endpoints.Country.city)
        if(data.param){
            return this.fetchParams(url, "GET", null, `/${data.param}` ).then(response => response)
        }
    }

    Theme(data){
        let url = this.buildUrl(endpoints.Theme.theme)
        return this.fetch(url, "GET", null, data).then(response => response)
    }

}