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
export const allCountries = () => dispatch => {
  dispatch({ type: COUNTRIES_LOADING });
  const authAxios = axiosWithAuth();
  authAxios
    .get(
      `http://localhost:5000/api/auth/countries/${sessionStorage.getItem(
        "userId"
      )}`
    )
    .then(respo => {
      dispatch({ type: COUNTRIES_INFO_FETCH, payload: respo.data });
    })
    .catch(respon => dispatch({ type: COUNTRIES_INFO_FAILED }));

};

// Country Action Fetch

// FETCH Country BY ID
export const COUNTRY_INFO_LOADING = "COUNTRY_INFO_LOADING";
export const COUNTRY_INFO_FETCH = "COUNTRY_INFO_FETCH";
export const COUNTRY_INFO_FAILED = "COUNTRY_INFO_FAILED";

export const countryFetch = (countryid) => dispatch => {
  const authAxios = axiosWithAuth();
  const user_id = sessionStorage.getItem("userId")
  authAxios
    .get(`http://localhost:5000/api/auth/communities/${user_id}/${countryid}`)
    .then(respo => dispatch({ type: COUNTRY_INFO_FETCH, payload: respo.data }))
    .catch(respon => dispatch({ type: COUNTRY_INFO_FAILED }));
};

// Create Country
export const createCountry = values => dispatch => {
  const authAxios = axiosWithAuth();

  authAxios
    .post("http://localhost:5000/api/createcountry", values)
    .then(respo =>
      dispatch({ type: COUNTRIES_INFO_FETCH, payload: respo.data })
    );
};


// ################################################################## USERS ACTIONS ##############################################################
// Login Token
export const logInaction = (values, history) => dispatch => {
  dispatch({ type: LOGIN_LOADING });
  axios
    .post("http://localhost:5000/api/auth/login", values)
    .then(res => dispatch({ type: LOGIN_FETCH, payload: res.data })
    )
    .catch(error => dispatch({ type: LOGIN_FAILED }));
};

// Create New User Action
// export const USERS_INFO_LOADING = "USERS_INFO_LOADING";
export const USERS_INFO_FETCH = "USERS_INFO_FETCH";
// export const USERS_INFO_FAILED = "USERS_INFO_FAILED";
export const createUser = (newuser, history) => dispatch => {
  axios
    .post("http://localhost:5000/api/auth/register", newuser)
    .then(respo => {
      dispatch({ type: USERS_INFO_FETCH, payload: respo.data });
    })
    .catch(respo => dispatch({ type: USER_INFO_FAILED }));
};

// User- Info
export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_FETCH = "USER_INFO_FETCH";
export const USER_INFO_FAILED = "USER_INFO_FAILED";
export const userInfo = id => dispatch => {
  console.log("user info")
  const authAxios = axiosWithAuth();
  authAxios
    .get(`http://localhost:5000/api/auth/users/${id}`)
    .then(respo => {
      console.log("sfwfwefwefw")
      sessionStorage.setItem("username", respo.data.user.username);
      sessionStorage.setItem("userid", respo.data.user.id);
      dispatch({ type: USER_INFO_FETCH, payload: respo.data });
    })
    .catch(respon => dispatch({ type: USER_INFO_FAILED }));
};

// Edite User
export const editeUser = (id, value) => dispatch => {
  console.log(id, value)
  const authAxios = axiosWithAuth();
  authAxios
    .put(`http://localhost:5000/api/auth/users/${id}`, value)
    .then(respo => {
      console.log(respo)
      // dispatch({ type: USERS_INFO_FETCH, payload: respo.data })
    })

    .catch(respon => console.log(respon));
};

// Delete a User
export const deleteUser = (id, value) => dispatch => {
  const authAxios = axiosWithAuth();
  authAxios
    .delete(`http://localhost:5000/api/user/${id}`, value)
    .then(respo => dispatch({ type: USERS_INFO_FETCH, payload: respo.data }))
    .catch(respon => console.log(respon));
};
export const cleaning = () => dispatch => {
  dispatch({ type: CLEANING_DATA });
};

// GET ALL USERS
export const ALL_USERS_FETCH = "ALL_USERS_FETCH";
export const ALL_USERS_FAILED = "ALL_USERS_FAILED";
export const getAllUsers = () => dispatch => {
  const authAxios = axiosWithAuth();
  authAxios
    .get(`http://localhost:5000/api/auth/users`)
    .then(respo => {
      console.log(respo)
      dispatch({ type: ALL_USERS_FETCH, payload: respo.data });
    })
    .catch(respon => dispatch({ type: ALL_USERS_FAILED }));
};



// ################################################################## CHILDREN ACTIONS ##############################################################
// Children RECORDS
export const RECORDS_START = "RECORDS_START";
export const RECORDS_FETCH = "RECORDS_FETCH";
export const RECORDS_FAILED = "RECORDS_FAILED";
export const getRecords = id => dispatch => {
  const authAxios = axiosWithAuth();
  let user_id = sessionStorage.getItem("userid");
  authAxios
    .get(`http://localhost:5000/api/auth/childrens/${user_id}/${id}`)
    .then(respo => {
      console.log(respo)
      dispatch({ type: RECORDS_FETCH, payload: respo.data });
    })
    .catch(respon => dispatch({ type: RECORDS_FAILED }));
};


// Child RECORD BY ID
export const RECORD_START = "RECORD_START";
export const RECORD_FETCH = "RECORD_FETCH";
export const RECORD_FAILED = "RECORD_FAILED";
// User Information Fetch
export const getChildRecord = (communityid, childid) => dispatch => {
  // dispatch({ type: RECORDS_START });
  const authAxios = axiosWithAuth();
  let user_id = sessionStorage.getItem("userid");
  authAxios
    .get(`http://localhost:5000/api/auth/childrens/${user_id}/${communityid}/${childid}`)
    .then(respo => {
      console.log(respo)
      dispatch({ type: RECORD_FETCH, payload: respo.data });
    })
    .catch(respon => dispatch({ type: RECORD_FAILED }));
};