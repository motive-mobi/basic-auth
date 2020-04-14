export default {
    isAuth() {
      return { type: 'LOGIN_SUCCESS' }
    },
    isLogout() {
      return { type: 'LOGOUT' }
    }
};
