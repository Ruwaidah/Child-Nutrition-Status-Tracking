import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { allCountries } from "../actions";
function Countries(props) {
  console.log(props.countries);
  useEffect(() => {
    props.allCountries();
    // props.history.push(`/${sessionStorage.getItem("username")}`);
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
            to={`/${country.country_name}/${country.id}/communities`}
            key={index}
          >
            {country.country_name}
          </Link>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state.data);
  return {
    username: state.user,
    countries: state.data
  };
};

export default connect(mapStateToProps, { allCountries })(Countries);
