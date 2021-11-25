import axios from "axios";

function axiosWithAuth() {
  const token = sessionStorage.getItem("token");
  return axios.create({
    baseURL: "https://malo01.herokuapp.com/api/auth",
    headers: {
      authorization: token,
    },
  });
}

export default axiosWithAuth;


// https://malo01.herokuapp.com/