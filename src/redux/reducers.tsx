const initialState = {
    authToken: null,
}

type AuthAction = {
  type: 'LOGIN';
  payload: string;
} | {
  type: 'LOGOUT';
};

export default (state = initialState, action: AuthAction) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          ...state, 
          authToken: action.payload,
        }
      case 'LOGOUT':
        return {
          authToken: null,
        }
      default:
        return state;
    }
}