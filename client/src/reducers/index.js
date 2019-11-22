import {
  LOGIN_LOADING,
  LOGIN_FETCH,
  LOGIN_FAILED,
  USER_INFO_LOADING,
  USER_INFO_FETCH,
  USER_INFO_FAILED,
  COUNTRY_INFO_LOADING,
  COUNTRY_INFO_FETCH,
  COUNTRY_INFO_FAILED,
  COUNTRIES_INFO_FETCH,
  COUNTRIES_INFO_FAILED,
  USERS_INFO_FETCH,
  CLEANING_DATA
} from "../actions";

const initiallstate = {
  user: sessionStorage.getItem("username"),
  data: [],
  isloading: false,
  error: null,
  token: sessionStorage.getItem("token"),
  userInfo: "",
  countries: [],
  allusers: []
};

export const rootReducer = (state = initiallstate, actions) => {
  switch (actions.type) {
    // Login Cases
    case LOGIN_LOADING:
      return {
        ...state,
        isloading: true,
        error: null
      };

    case LOGIN_FETCH:
      sessionStorage.setItem("token", actions.payload.token.payload);

      return {
        ...state,
        user: actions.payload.user,
        token: sessionStorage.getItem("token"),
        isloading: false,
        error: null
      };
    case LOGIN_FAILED:
      return {
        data: [],
        isloading: false,
        error: "Invalid UserName or Password!"
      };

    // user info fetch
    case USER_INFO_LOADING:
      return {
        ...state,
        isloading: true,
        error: null
      };

    case USER_INFO_FETCH:
      return {
        ...state,
        userInfo: actions.payload,
        isloading: false,
        error: null
      };
    case USER_INFO_FAILED:
      return {
        data: [],
        isloading: false,
        error: "error loading user Info"
      };

    // Country Fetch
    // case COUNTRY_INFO_LOADING:
    //   console.log(actions.payload);
    //   return {
    //     ...state,
    //     isloading: true,
    //     error: null
    //   };
    case COUNTRY_INFO_FETCH:
      return {
        ...state,
        data: actions.payload,
        isloading: false,
        error: null
      };
    case COUNTRY_INFO_FAILED:
      return {
        data: [],
        isloading: false,
        error: "NO COMMUNITE FOUND"
      };

    // Countries Fetch

    case COUNTRIES_INFO_FETCH:
      return {
        ...state,
        data: actions.payload,
        isloading: false,
        error: null
      };
    case COUNTRIES_INFO_FAILED:
      return {
        data: [],
        isloading: false,
        error: "error loading Info"
      };

    case USERS_INFO_FETCH:
      return {
        ...state,
        allusers: actions.payload,
        isloading: false,
        error: null
      };
    case CLEANING_DATA:
      return {
        initiallstate
      };
    default:
      return state;
  }
};
