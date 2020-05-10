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
  COUNTRIES_LOADING,
  COUNTRIES_INFO_FETCH,
  COUNTRIES_INFO_FAILED,
  USERS_INFO_FETCH,
  CLEANING_DATA
} from "../actions";

const initiallstate = {
  user: {},
  data: [],
  isloading: false,
  error: null,
  token: sessionStorage.getItem("token"),
  userInfo: "",
  countries: [],
  allusers: [],
  communities: null
};

export const rootReducer = (state = initiallstate, actions) => {
  console.log(actions.type)
  switch (actions.type) {
    // Login Cases
    case LOGIN_LOADING:
      return {
        ...state,
        isloading: true,
        error: null
      };

    case LOGIN_FETCH:
      console.log(actions.payload.user)
      sessionStorage.setItem("userId", actions.payload.user.id);
      sessionStorage.setItem("token", actions.payload.token);
      sessionStorage.setItem("username", actions.payload.user.username);
      sessionStorage.setItem("isAdmin", actions.payload.user.isAdmin);
      sessionStorage.setItem("countryId", actions.payload.user.country_id);
      return {
        ...state,
        user: actions.payload.user,
        token: actions.payload.token,
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
        user: actions.payload.user,
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
      console.log(actions.payload);
      return {
        ...state,
        communities: actions.payload,
        isloading: false,
        error: null
      };
    case COUNTRY_INFO_FAILED:
      return {
        data: [],
        isloading: false,
        error: "NO COMMUNITE FOUND"
      };

    // // Countries Fetch
    // case COUNTRIES_LOADING:
    //   return {
    //     ...state,
    //     isloading: true,
    //     error: null
    //   };

    case COUNTRIES_INFO_FETCH:
      console.log(actions.payload);
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

    // case USERS_INFO_FETCH:
    //   return {
    //     ...state,
    //     allusers: actions.payload,
    //     isloading: false,
    //     error: null
    //   };
    // case CLEANING_DATA:
    //   return {
    //     initiallstate
    //   };
    default:
      return state;
  }
};
