import React, { Fragment } from 'react';
import { store, persistor } from '../redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../assets/scss/main.scss';
import '../assets/scss/media.css';

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  </Fragment>
);

export default MyApp;