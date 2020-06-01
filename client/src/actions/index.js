import axios from "axios";
import { axiosWithAuth } from "../components/axiosWithAuth";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_FAILED = "LOGIN_FAILED";

// // UserS- Info

// users
export const CLEANING_DATA = "CLEANING_DATA";

// ################################################################## COUNTRIES ACTIONS ##############################################################
// Get All Countries
// Countries
export const COUNTRIES_LOADING = "COUNTRIES_LOADING";
export const COUNTRIES_INFO_FETCH = "COUNTRIES_INFO_FETCH";
export const COUNTRIES_INFO_FAILED = "COUNTRIES_INFO_FAILED";
export const allCountries = () => (dispatch) => {
  dispatch({ type: COUNTRIES_LOADING });
  const authAxios = axiosWithAuth();
  authAxios
    .get(
      `https://malo01.herokuapp.com/api/auth/countries/${sessionStorage.getItem(
        "userId"
      )}`
    )
    .then((respo) => {
      dispatch({ type: COUNTRIES_INFO_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: COUNTRIES_INFO_FAILED }));
};

// Country Action Fetch

// FETCH Country BY ID
export const COUNTRY_INFO_LOADING = "COUNTRY_INFO_LOADING";
export const COUNTRY_INFO_FETCH = "COUNTRY_INFO_FETCH";
export const COUNTRY_INFO_FAILED = "COUNTRY_INFO_FAILED";

export const countryFetch = (countryid) => (dispatch) => {
  dispatch({ type: COUNTRY_INFO_LOADING });
  const authAxios = axiosWithAuth();
  const user_id = sessionStorage.getItem("userId");
  authAxios
    .get(
      `https://malo01.herokuapp.com/api/auth/communities/${user_id}/${countryid}`
    )
    .then((respo) =>
      dispatch({ type: COUNTRY_INFO_FETCH, payload: respo.data })
    )
    .catch((respon) => dispatch({ type: COUNTRY_INFO_FAILED }));
};

// Create Community
export const createCommunity = (values) => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .post(`https://malo01.herokuapp.com/api/auth/communities`, values)
    .then((respo) =>
      dispatch({ type: COUNTRY_INFO_FETCH, payload: respo.data })
    );
};

// Create Country
export const createCountry = (values) => (dispatch) => {
  const userId = sessionStorage.getItem("userId");
  const authAxios = axiosWithAuth();
  authAxios
    .post(`https://malo01.herokuapp.com/api/auth/countries/${userId}`, values)
    .then((respo) =>
      dispatch({ type: COUNTRIES_INFO_FETCH, payload: respo.data })
    );
};

// ################################################################## USERS ACTIONS ##############################################################
// Login Token
export const logInaction = (values, history) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("https://malo01.herokuapp.com/api/auth/login", values)
    .then((res) => dispatch({ type: LOGIN_FETCH, payload: res.data }))
    .catch((error) => dispatch({ type: LOGIN_FAILED }));
};

// Create New User Action
// export const USERS_INFO_LOADING = "USERS_INFO_LOADING";
export const USERS_INFO_FETCH = "USERS_INFO_FETCH";
// export const USERS_INFO_FAILED = "USERS_INFO_FAILED";
export const createUser = (newuser, history) => (dispatch) => {
  axios
    .post("https://malo01.herokuapp.com/api/auth/register", newuser)
    .then((respo) => {
      dispatch({ type: USERS_INFO_FETCH, payload: respo.data });
    })
    .catch((respo) => dispatch({ type: USER_INFO_FAILED }));
};

// User- Info
export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_FETCH = "USER_INFO_FETCH";
export const USER_INFO_FAILED = "USER_INFO_FAILED";
export const userInfo = (id) => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .get(`https://malo01.herokuapp.com/api/auth/users/${id}`)
    .then((respo) => {
      sessionStorage.setItem("username", respo.data.user.username);
      sessionStorage.setItem("userid", respo.data.user.id);
      dispatch({ type: USER_INFO_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: USER_INFO_FAILED }));
};

// Edite User
export const editeUser = (id, value) => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .put(`https://malo01.herokuapp.com/api/auth/users/${id}`, value)
    .then((respo) => {
      // dispatch({ type: USERS_INFO_FETCH, payload: respo.data })
    })
    .catch((respon) => console.log(respon));
};

export const ALL_USERS_FETCH = "ALL_USERS_FETCH";
export const ALL_USERS_FAILED = "ALL_USERS_FAILED";
// Delete a User
export const deleteUser = (id) => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .delete(`https://malo01.herokuapp.com/api/auth/users/${id}`)
    .then((respo) => dispatch({ type: ALL_USERS_FETCH }))
    .catch((respon) => dispatch({ type: ALL_USERS_FAILED }));
};
export const cleaning = () => (dispatch) => {
  dispatch({ type: CLEANING_DATA });
};

// GET ALL USERS

export const getAllUsers = () => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .get(`https://malo01.herokuapp.com/api/auth/users`)
    .then((respo) => {
      dispatch({ type: ALL_USERS_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: ALL_USERS_FAILED }));
};

// ################################################################## CHILDREN ACTIONS ##############################################################
// Children RECORDS
export const RECORDS_START = "RECORDS_START";
export const RECORDS_FETCH = "RECORDS_FETCH";
export const RECORDS_FAILED = "RECORDS_FAILED";
export const getRecords = (id) => (dispatch) => {
  dispatch({ type: RECORDS_START });
  const authAxios = axiosWithAuth();
  let user_id = sessionStorage.getItem("userid");
  authAxios
    .get(`https://malo01.herokuapp.com/api/auth/childrens/${user_id}/${id}`)
    .then((respo) => {
      dispatch({ type: RECORDS_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: RECORDS_FAILED }));
};

// Child RECORD BY ID
export const RECORD_START = "RECORD_START";
export const RECORD_FETCH = "RECORD_FETCH";
export const RECORD_FAILED = "RECORD_FAILED";
export const getChildRecord = (communityid, childid) => (dispatch) => {
  // dispatch({ type: RECORDS_START });
  const authAxios = axiosWithAuth();
  let user_id = sessionStorage.getItem("userid");
  authAxios
    .get(
      `https://malo01.herokuapp.com/api/auth/childrens/${user_id}/${communityid}/${childid}`
    )
    .then((respo) => {
      dispatch({ type: RECORD_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: RECORD_FAILED }));
};

export const addingChildRecord = (data, childid) => (dispatch) => {
  // dispatch({ type: RECORDS_START });
  const authAxios = axiosWithAuth();
  authAxios
    .post(
      `https://malo01.herokuapp.com/api/auth/childrens//adding/record/${childid}`,
      data
    )
    .then((respo) => {
      dispatch({ type: RECORD_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: RECORD_FAILED }));
};

// ADDING CHILD
export const ADDING_START = "ADDING_START";
export const ADDING_FETCH = "ADDING_FETCH";
export const ADDING_FAILED = "ADDING_FAILED";

export const addingChild = (data, communityid) => (dispatch) => {
  const authAxios = axiosWithAuth();
  authAxios
    .post(
      `https://malo01.herokuapp.com/api/auth/childrens/${communityid}`,
      data
    )
    .then((respo) => {
      dispatch({ type: RECORD_FETCH, payload: respo.data });
    })
    .catch((respon) => dispatch({ type: RECORD_FAILED }));
};
