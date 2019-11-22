import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { cleaning } from "../actions";

function Header(props) {
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
        <div>
          <h1 className={classes.headline}>MALO </h1>
          <h3>International Child Nutrition Status Tracker</h3>
        </div>
        {props.userAllInfo ? (
          props.userAllInfo.usertype ? (
            <div>
              <NavLink to={`/${props.username}/users`}>Users</NavLink>
              <NavLink exact to={`/${props.username}`}>
                Countries
              </NavLink>
            </div>
          ) : (
            <NavLink exact to={`/${props.username}`}>
              {props.userAllInfo.country}
            </NavLink>
          )
        ) : null}

        <div>
          <Button onClick={OnLogOut} variant="contained">
            LogOut
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    username: state.user,
    userAllInfo: state.userInfo
  };
};

export default connect(mapStatetoProps, { cleaning })(Header);
