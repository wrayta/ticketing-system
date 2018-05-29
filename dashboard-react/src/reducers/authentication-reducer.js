const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isRegistered: null,
    isLoading: true,
    user: null,
    errors: {},
};


const authentication = (state = initialState, action) => {

    switch (action.type) {

        case 'USER_LOADING':
            return {
                ...state, 
                isLoading: true
            };

        case 'USER_LOADED':
            return {
                ...state, 
                isAuthenticated: true, 
                isRegistered: true,
                isLoading: false, 
                user: action.user
            };

        case 'LOGIN_SUCCESSFUL':
            localStorage.setItem("token", action.data.token);
            return {
                ...state, 
                ...action.data, 
                isAuthenticated: true, 
                isRegistered: true,
                isLoading: false, 
                errors: null
            };
        case 'REGISTRATION_SUCCESSFUL':
            return {
                ...state, 
                ...action.data, 
                isAuthenticated: false, 
                isRegistered: true,
                isLoading: false, 
                errors: null
            };

        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'LOGOUT_SUCCESSFUL':
            localStorage.removeItem("token");
            return {
                ...state, 
                errors: action.data, 
                token: null, 
                user: null,
                isAuthenticated: false, 
                isLoading: false
            };
        case 'REGISTRATION_FAILED':
            return {
              ...state, 
              errors: action.data, 
              token: null, 
              user: null,
              isAuthenticated: false, 
              isRegistered: false,
              isLoading: false
            };
        default:
          return state;
    }
}

export const getAuthentication = (state) => state.authentication;

export default authentication;