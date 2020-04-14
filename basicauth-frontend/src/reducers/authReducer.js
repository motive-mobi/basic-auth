const initialState = { isAuthenticated: false };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true }
        case 'LOGOUT':
            return { ...state, isAuthenticated: false }
        default:
            return state
    }
};
