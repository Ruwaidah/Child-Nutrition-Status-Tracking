import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { getAllUsers, userInfo } from "../actions";
import ShowUser from "./ShowUser";

function AllUsers(props) {
  useEffect(() => {
    props.getAllUsers();
  }, []);

  if (!props.allusers) return <p>Loading</p>;
  return (
    <div className="list-div">
      <div className="createUser">
        <button
          onClick={() =>
            props.history.push(
              `/${props.userAllInfo.username}/users/createAUser`
            )
          }
        >
          Create User
        </button>
      </div>
      <div className="usersList">
        {props.allusers.map((user, index) =>
          <Link onClick={() => props.userInfo(user.id)} key={index} to={`users-show/${user.username}/${user.id}`}>{user.username}</Link>
          // <ShowUser key={index} showuser={user} history={props.history} />
        )}
      </div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    allusers: state.allusers,
  };
};

export default connect(mapStatetoProps, { getAllUsers, userInfo })(AllUsers);
