import React, { useState } from "react";
import { connect } from "react-redux";
import { editeUser, deleteUser } from "../actions";

function ShowUser(props) {
  const [edite, setEdite] = useState(false);
  const [user, setUser] = useState(props.showuser);
  const onChange = event => {
    if ([event.target.name] == "usertype") {
      if (event.target.value == "true")
        setUser({
          ...user,
          usertype: true
        });
      else
        setUser({
          ...user,
          usertype: false
        });
    } else {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      });
    }
  };
  const onSubmit = event => {
    event.preventDefault();
    props.editeUser(user.id, user);
    setEdite(false);
  };
  return (
    <div>
      <div className="alllist">
        <div className="field">
          <h5>Username: </h5>
          <p>{props.showuser.username}</p>
        </div>
        <div className="field">
          <h5>First Name: </h5>
          <p>{props.showuser.firstname}</p>
        </div>
        <div className="field">
          <h5>Last Name: </h5>
          <p>{props.showuser.lastname}</p>
        </div>
        <div className="field">
          <h5>Email: </h5>
          <p>{props.showuser.email}</p>
        </div>
        <div className="field">
          <h5>Country: </h5>
          <p>{props.showuser.country}</p>
        </div>
        <div className="field">
          <h5>User Type: </h5>
          {props.showuser.usertype ? (
            <p> Globel Admin </p>
          ) : (
            <p> Country Admin </p>
          )}
        </div>
        <button onClick={() => props.deleteUser(user.id, user)}>Delete</button>
        <button onClick={() => setEdite(true)}>Edite</button>
      </div>
      {edite && (
        <div className="form-div">
          <form onSubmit={onSubmit} className="editeForm">
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              onChange={onChange}
              value={user.username}
            />

            <label htmlFor="firstname">First Name:</label>
            <input
              id="firstname"
              name="firstname"
              onChange={onChange}
              value={user.firstname}
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              name="lastname"
              onChange={onChange}
              value={user.lastname}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              onChange={onChange}
              value={user.email}
            />
            <div>
              {user.usertype ? (
                <select name="usertype" onChange={onChange}>
                  <option value="true" selected={true}>
                    Globel Admin
                  </option>
                  <option value="false"></option>
                </select>
              ) : (
                <select name="usertype" onChange={onChange}>
                  <option value="true">Globel Admin</option>
                  <option value="false" selected={true}>
                    Country Admin
                  </option>{" "}
                </select>
              )}
            </div>
            <button>Edite</button>
            <button onClick={() => setEdite(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default connect(state => state, { editeUser, deleteUser })(ShowUser);
