import axios from "axios";
import API_URL from "./api";
import authActions from '../actions/authActions.js';
import store from "../store";
import history from "../utils/history";

const Login = async (data) => {
  const LOGIN_ENDPOINT = `${API_URL.API_URL}${API_URL.endpoints.login}`;

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data);

        if(response.status === 200 && response.data.token && response.data.expires_at){
            let token = response.data.token;
            let expire_at = response.data.expires_at;

            localStorage.setItem("access_token", token);
            sessionStorage.setItem("access_token", token);
            localStorage.setItem("expire_at", expire_at);

            console.log('localStorage["access_token"]:',localStorage['access_token']);
            console.log('localStorage["expire_at"]:',localStorage['expire_at']);
            console.log('user.js store:',store);

            store.dispatch(authActions.isAuth());
            history.push("/dashboard");
        }

    } catch(e){
        console.log(e);
    }
}

const register = async (data) => {
    const SIGNUP_ENDPOINT = `${API_URL.API_URL}${API_URL.endpoints.register}`;

    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
          });

          console.log('register response:',response);
    } catch(e){
        console.log(e);
    }
}

/*const user = async () => {
  const USER_ENDPOINT = `${API_URL.API_URL}${API_URL.endpoints.user}`;
  const myToken = localStorage["access_token"];
  const options = {
    method: 'GET',
    url: USER_ENDPOINT,
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + myToken
    }
  };
  console.log('user myToken:', myToken);
  console.log('user options:', options);

  try {
    let response = await axios(options);
    console.log('user response:', response);
  } catch(e){
    console.log(e);
  }
}*/

const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
    store.dispatch(authActions.isLogout());
    history.push("/");

    console.log('localStorage["access_token"]:', localStorage['access_token']);
    console.log('localStorage["expire_at"]:', localStorage['expire_at']);
}

export { Login, register, logout };
