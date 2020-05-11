import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch, userInfo } from "../actions";

function Communities(props) {
  console.log(sessionStorage.getItem("userId"));
  useEffect(() => {
    props.countryFetch(
      props.match.params.country_id
    );
    props.userInfo(sessionStorage.getItem("userId"));

  }, []);

  console.log(props.user)
  if (!props.communities)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  console.log(props.communities)
  return (
    <div>
      <button
        onClick={() =>
          props.history.push(
            `/${props.match.params.country}/communities/createacommunity`
          )
        }
      >
        add Community
      </button>
      <h2>Communities</h2>

      {props.communities.map((communitie, index) => (
        <Link
          to={`${communitie.country_id}/communities/${communitie.community_name}/${communitie.communityid}/Children`}
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
    communities: state.communities
    // countries: state.data
  };
};
export default connect(mapStatetoProps, { countryFetch, userInfo })(
  Communities
);
