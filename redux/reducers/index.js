import { combineReducers } from 'redux';
import counter from './countReducer';
import cart from './cartReducer'
import address from './addressReducer'
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import userReducer from './userReducer';
import categories from './categoryReducer';
import products from './productsReducer';
import loader from './loader';
import checkout from './checkoutReducer';
import theme from './themeReducer';
// let historyR = !process.env.IS_SERVER ? { router: connectRouter(history) } : {};


export default combineReducers({
   count: counter,
   loader,
   cart,
   address,
   user: loginReducer,
   register: registerReducer,
   whichUser: userReducer,
   categories,
   products,
   checkout,
   theme,
})
