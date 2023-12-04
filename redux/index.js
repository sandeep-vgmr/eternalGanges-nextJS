import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [''],
  whitelist: ['cart'],
}

const sagaMiddleware = createSagaMiddleware()
const persistedReducer = persistReducer(persistConfig, reducers)
const initialstore = {};

let middlewares = [
  sagaMiddleware,
];
const enhancers = [composeWithDevTools(applyMiddleware(...middlewares))];
const store = createStore(persistedReducer,
  initialstore,
  compose( ...enhancers ));

sagaMiddleware.run(rootSaga);
store.asyncReducers = {};
const persistor = persistStore(store);

export { store, persistor };