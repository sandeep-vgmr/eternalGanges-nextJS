  import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWithWait, getToken } from '../components/helper/method';
import { fetchUserAction } from '../redux/actions/registerAction';
import { loadState, saveState } from '../utils/localstorage';
import { refreshTokenAction } from '../redux/actions/loginAction';

export const withPrivateRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [token, setToken] = useState("")

    useEffect(() => {
      if (!loadState("token")) {
        router.replace('/login');
      } else {
        let localToken = loadState("token")
        setToken(localToken)
        dispatch(fetchUserAction())
      }
    }, []);


    useEffect(() => {  
      if (token.length) {
        checkTokenExpiration();
      }
    }, [token]);

    const checkTokenExpiration = () => {
      let accessToken = null;

      const expiration = loadState("expInToken")
      const refToken = loadState("refreshToken")
      const expirationDate = expiration * 1000;

      if (token && expiration && Date.now() < expirationDate) {
        accessToken = token;
        return accessToken;
      } else {
        let data = { "refreshToken": refToken }
        fetchWithWait({ dispatch, action: refreshTokenAction(data) }).then((res) => {
          if (res.token) {
            const { token, refreshToken, refresh_token_expiration } = res
            saveState('token', token);
            saveState('refreshToken', refreshToken);
            saveState('expInToken', refresh_token_expiration);
          }
        }).catch((e) => {
          console.log(`error`, e)
        })
      }
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};