import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch, userInfo } from "../actions";

function Communities(props) {
  console.log(props);
  useEffect(() => {
    props.countryFetch(
      props.match.params.country_id
    );
    props.userInfo(sessionStorage.getItem("userId"));

  }, []);

  console.log(props.communities)
  if (!props.communities)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  console.log(props.communities)
  return (
    <div>
      <Link
        to={
          `${props.match.params.country_id}/communities/createacommunity`
        }
      >
        add Community
      </Link>
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
