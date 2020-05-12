import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { cleaning } from "../actions";

function Header(props) {
  console.log(props.user)
  const OnLogOut = () => {
    sessionStorage.clear();
    props.cleaning();
    props.history.push("/");
  };

  const useStyles = makeStyles({
    root: {
      width: "80%",
      overflowX: "auto",
      margin: "5%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },

    headline: {
      margin: "2%",
      paddingTop: "2%",
      fontSize: "3rem"
    },

    subtitle: {
      margin: "2%",
      fontSize: "1.5rem"
    },

    button: {
      margin: "2%",
      width: "30%",
      padding: "2%",
      alignItem: "center"
    }
  });

  const classes = useStyles();

  return (
    <div className="nav">
      <div className={`${classes.root} header`}>
        <div className="malo">
          <h1 className={classes.headline}>MALO </h1>
          <h3>International Child Nutrition Status Tracker</h3>
        </div>
      </div>
      {props.user ? (
        props.user.isAdmin == "1" ? (
          <div className="nav-btn">
            <NavLink to={`/${sessionStorage.getItem("username")}/admin/show-users`}>Users</NavLink>
            <NavLink exact to={`/${sessionStorage.getItem("username")}/admin`}>
              Countries
              </NavLink>
          </div>
        ) : (
            <NavLink exact to={`/${sessionStorage.getItem("username")}/user/${props.user.country_name}/${props.user.country_id}`}>
              {props.user.country_name}
            </NavLink>
          )
      ) : null}

      <div className="logout">
        <button onClick={OnLogOut} >
          LogOut
          </button>
      </div>

    </div>
  );
}

const mapStatetoProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStatetoProps, { cleaning })(Header);
