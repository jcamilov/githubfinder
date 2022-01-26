const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS": {
      return { ...state, users: action.payload, loading: false };
    }
    case "GET_USER_AND_REPOS": {
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    }
    case "SET_LOADING": {
    }

    case "CLEAR_USERS": {
      return { ...state, users: [], loading: false };
    }
    default:
      return { ...state, loading: true };
  }
};

export default githubReducer;
