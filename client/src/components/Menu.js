import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { userInfo, allUser } from "../actions";
import Communities from "./Communities";
import Countries from "./Countries";

function Menu(props) {
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      props.userInfo(props.username);
    }
  }, []);
  if (!props.userAllInfo) return <p>Loading</p>;
  return (
    <div>
      {props.userAllInfo.usertype ? (
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
    username: state.user,
    userAllInfo: state.userInfo
  };
};

export default connect(mapStatetoProps, { userInfo })(Menu);
