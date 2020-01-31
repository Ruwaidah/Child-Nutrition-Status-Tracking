import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userInfo, allUser } from "../actions";
import Communities from "./Communities";
import Countries from "./Countries";

function Menu(props) {
  console.log(props.loading);
  useEffect(() => {
    props.userInfo(sessionStorage.getItem("userId"));
  }, []);
  if (props.loading) return <p>Loading</p>;
  return (
    <div>
      {props.user.isAdmin ? (
        <div>
          <Countries history={props.history} />
        </div>
      ) : (
        <Communities {...props} />
      )}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    loading: state.isloading,
    user: state.user
  };
};

export default connect(mapStatetoProps, { userInfo })(Menu);
