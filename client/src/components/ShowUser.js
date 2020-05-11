import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editeUser, deleteUser, userInfo } from "../actions";

function ShowUser(props) {
  console.log(props.user)
  const id = props.match.params.id
  let check = false
  const [edite, setEdite] = useState(false);
  const [gettheUSer, setUser] = useState(props.user);
  const [submitted, setSubmit] = useState(false)

  useEffect(() => {
    props.userInfo(id)
    check = !check
    setUser(props.user)
  }, [submitted, edite]);

  if (props.user) {
    check = !check
  }

  useEffect(() => {
    setUser(props.user)
  }, [check, edite])



  const onChange = event => {
    // if ([event.target.name] == "isAdmin") {
    //   if (event.target.value == "true")
    //     setUser({
    //       ...gettheUSer,
    //       usertype: true
    //     });

    //   else
    //     setUser({
    //       ...gettheUSer,
    //       usertype: false
    //     });


    // } else {
    setUser({
      ...gettheUSer,
      [event.target.name]: event.target.value
    });
    // }
  };

  const onSubmit = event => {
    event.preventDefault();
    props.editeUser(props.user.id, gettheUSer);
    setEdite(false);
    setSubmit(!submitted)
  };
  console.log(props.user)
  console.log(gettheUSer)

  if (!props.user) return <h3>Loading</h3>
  return (
    <div>
      <div className="alllist">
        <div className="field">
          <h5>Username: </h5>
          <p>{props.user.username}</p>
        </div>
        <div className="field">
          <h5>First Name: </h5>
          <p>{props.user.firstname}</p>
        </div>
        <div className="field">
          <h5>Last Name: </h5>
          <p>{props.user.lastname}</p>
        </div>
        <div className="field">
          <h5>Email: </h5>
          <p>{props.user.email}</p>
        </div>
        <div className="field">
          <h5>Country: </h5>
          <p>{props.user.country_name}</p>
        </div>
        <div className="field">
          <h5>User Type: </h5>
          {props.user.isAdmin == 1 ? (
            <p> Globel Admin </p>
          ) : (
              <p> Country Admin </p>
            )}
        </div>
        <button onClick={() => props.deleteUser(gettheUSer.id, gettheUSer)}>Delete</button>
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
              value={gettheUSer.username}
            />

            <label htmlFor="firstname">First Name:</label>
            <input
              id="firstname"
              name="firstname"
              onChange={onChange}
              value={gettheUSer.firstname}
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              id="lastname"
              name="lastname"
              onChange={onChange}
              value={gettheUSer.lastname}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={gettheUSer.email}
              onChange={onChange}

            />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country_name"
              value={gettheUSer.country_name}
              onChange={onChange}

            />
            <div>
              {gettheUSer.isAdmin == 1 ? (
                <select name="isAdmin" onChange={onChange}>
                  <option value="1" selected={true}>
                    Globel Admin
                  </option>
                  <option value="0">Country Admin</option>
                </select>
              ) : (
                  <select name="isAdmin" onChange={onChange}>
                    <option value="1">Globel Admin</option>
                    <option value="0" selected={true}>
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
const mapStatetoProps = state => {
  return {
    user: state.user,
    allusers: state.allusers,
  };
};
export default connect(mapStatetoProps, { editeUser, deleteUser, userInfo })(ShowUser);
