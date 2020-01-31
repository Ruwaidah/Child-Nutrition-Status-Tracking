import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch, userInfo } from "../actions";

function Communities(props) {
  console.log(props.user);
  useEffect(() => {
    props.userInfo(sessionStorage.getItem("userId"));
  }, []);
  useEffect(() => {
    props.countryFetch(
      sessionStorage.getItem("userid"),
      props.match.params.countryid
    );
  }, []);

  if (props.communities == undefined || props.communities.length == 0)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <button
        onClick={event => {
          event.preventDefault();
          props.history.goBack();
        }}
      >
        Back
      </button>
      <button
        onClick={() =>
          props.history.push(
            `/${props.match.params.country}/communities/createacommunity`
          )
        }
      >
        CreateACommunity
      </button>
      <h2>Communities</h2>

      {props.communities.map((communitie, index) => (
        <Link
          to={`/${props.match.params.countryid}/${communitie.communityid}/Children`}
          key={index}
        >
          <h4>{communitie.community_name}</h4>
        </Link>
      ))}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    user: state.user,
    communities: state.data
    // countries: state.data
  };
};
export default connect(mapStatetoProps, { countryFetch, userInfo })(
  Communities
);
