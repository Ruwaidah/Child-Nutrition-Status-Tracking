import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logInaction, userInfo } from "../actions";
import { Link } from "react-router-dom";
import { stat } from "fs";

function LogInForm(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      props.userInfo(props.username);
      props.history.push(`/${props.username}`);
    }
  }, [sessionStorage.getItem("token")]);

  const onchange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onLogin = event => {
    event.preventDefault();
    props.logInaction(values);
  };

  return (
    <div className="container">
      {" "}
      <div className="loginDiv">
        <h3>Login Please</h3>
        {props.error ? <p className="error">{props.error}</p> : null}
        <form onSubmit={onLogin}>
          <div className="line">
            <label htmlFor="username">UserName: </label>
            <input
              id="username"
              name="username"
              placeholder="username"
              onChange={onchange}
              value={values.username}
            />
          </div>
          <div className="line">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={onchange}
              value={values.password}
            />
          </div>
          <button>LogIn</button>
        </form>
        <p className="forgot">
          forgot your password? <Link to="">Reset Password</Link>
        </p>
      </div>
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    username: state.user,
    error: state.error
  };
};
export default connect(mapStatetoProps, { logInaction, userInfo })(LogInForm);
