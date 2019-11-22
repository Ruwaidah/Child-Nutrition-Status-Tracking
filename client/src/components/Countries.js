import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createCountry } from "../actions";
function Countries(props) {
  useEffect(() => {
    props.createCountry();
    props.history.push(`/${props.username}`);
  }, []);

  if (!props.countries || props.countries.length == 0)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div className="countries">
      <div className="addcountry">
        <Link to={`/createACountry`}>Add Country</Link>
      </div>
      <div className="countriesList">
        {props.countries.map((country, index) => (
          <Link
            className="country"
            to={`/${country.country}/addmincommunities/${index}`}
            key={index}
          >
            {country.country}
          </Link>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.user,
    countries: state.data
  };
};

export default connect(mapStateToProps, { createCountry })(Countries);
