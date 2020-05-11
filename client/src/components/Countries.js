import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { allCountries, userInfo, createCountry } from "../actions";
function Countries(props) {
  useEffect(() => {
    props.allCountries();
  }, []);

  if (!props.countries) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className="countries">
      <div>
        <Link to="admin/show-users">Show Users</Link>
      </div>
      <div className="addcountry">
        <Link to={`admin/createcountry`}>Add Country</Link>
      </div>
      <div className="countriesList">
        {props.countries.map((country, index) => (
          <Link
            className="country"
            to={`/${sessionStorage.getItem("username")}/admin/${country.country_name}/${country.id}`}
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
    user: state.user,
    username: state.user,
    countries: state.data,
    loading: state.isloading
  };
};

export default connect(mapStateToProps, { allCountries, userInfo, createCountry })(Countries);
