import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { countryFetch } from "../actions";

function Communities(props) {
  console.log(props);
  useEffect(() => {
    if (props.userAllInfo)
      if (!props.userAllInfo.usertype) {
        props.countryFetch(props.userAllInfo.country);
        props.history.push(`/${props.userAllInfo.country}/communities`);
      }
  }, []);

  if (props.communities == undefined || props.communities.length == 0)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  if (
    props.userAllInfo.userstyle &&
    !props.countries[props.match.params.id].communities
  )
    return (
      <div>
        {" "}
        <button
          onClick={event => {
            event.preventDefault();
            props.history.goBack();
          }}
        >
          Back
        </button>
        <h1>No Communities</h1>
      </div>
    );
  if (props.userAllInfo.usertype) {
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

        {props.countries[props.match.params.id] &&
          props.countries[props.match.params.id].communities.map(
            (communitie, index) => (
              <Link
                to={`/${props.countries[props.match.params.id].country}/${
                  props.match.params.id
                }/${communitie.communite}/${index}/Children`}
                key={communitie.communite}
              >
                <h4>{communitie.communite}</h4>
              </Link>
            )
          )}
      </div>
    );
  }
  return (
    <div>
      <h2>Communities</h2>

      <button
        onClick={() => props.history.push(`/communities/createacommunity`)}
      >
        CreateACommunity
      </button>
      {props.communities.map((communitie, index) => (
        <Link
          to={`/${props.userAllInfo.country}/${communitie.communite}/${index}/Children`}
          key={communitie.communite}
        >
          <h4>{communitie.communite}</h4>
        </Link>
      ))}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    userinfo: state.user,
    userAllInfo: state.userInfo,
    communities: state.data,
    countries: state.data
  };
};
export default connect(mapStatetoProps, { countryFetch })(Communities);
