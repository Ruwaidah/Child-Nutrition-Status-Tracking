import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createCountry } from "../actions";

const CreateACountry = (props) => {
  const [country, setCountry] = useState({
    country_name: "",
  });

  const onChange = (event) => {
    setCountry({ country_name: event.target.value });
  };
  onsubmit = (event) => {
    event.preventDefault();
    props.createCountry(country);
    props.history.goBack();
    setCountry({
      country_name: "",
    });
  };
  return (
    <div>
      <form className="editeForm">
        <label htmlFor="countryname">Country name:</label>
        <input
          placeholder="country name"
          name="countryname"
          onChange={onChange}
        />
        <button>Submit</button>
        <button
          onClick={(event) => {
            event.preventDefault();
            props.history.goBack();
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    username: state.user,
    userAllInfo: state.userInfo,
  };
};

export default connect(mapStatetoProps, { createCountry })(CreateACountry);
