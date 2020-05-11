import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addingChild } from '../actions/index.js'


const ChildRecordNewForm = props => {
  const [child, setChild] = useState({
    childName: "",
    gender: "",
    city: "",
    parentName: "",
    phoneNo: "",
    country: "",
    state: "",
    street: "",
    birth: "",
    screenDate: "",
    weight: "",
    height: "",
    country_id: props.match.params.country_id,
    community_id: props.match.params.communityid
  });

  const onChange = event => {
    setChild({
      ...child,
      [event.target.name]: event.target.value
    });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.addingChild(child, props.match.params.communityid);
    props.history.goBack();
  };

  return (
    <div >
      <h1 >New Child Record</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="childName">CHILD'S NAME</label>
          <input
            onChange={onChange}
            type="text"
            name="childName"
            placeholder="Child Name"
          />
          <label htmlFor="parentsNames">PARENTS' NAMES</label>
          <input
            onChange={onChange}
            type="text"
            name="parentName"
            placeholder="Parents Names"
          />
        </div>
        <div>
          <label htmlFor="homeAddress">HOME ADDRESS</label>
          <input
            onChange={onChange}
            type="text"
            name="street"
            placeholder="Street Address"
          />
          <label htmlFor="communityName">CITY NAME</label>
          <input
            onChange={onChange}
            type="text"
            name="city"
            placeholder="Community"
          />

          <label htmlFor="communityName">STATE NAME</label>
          <input
            onChange={onChange}
            type="text"
            name="state"
            placeholder="state name"
          />
        </div>
        <div>
          {/* <label htmlFor="zipcode">ZIPCODE</label>
          <input
            onChange={onChange}
            type="text"
            name="zipcode"
            placeholder="Zipcode"
          /> */}
          <label htmlFor="phoneNumber">PHONE NUMBER</label>
          <input
            onChange={onChange}
            type="text"
            name="phoneNo"
            placeholder="+XX (XXX) XXX-XXXX"
          />
          <label htmlFor="country">COUNTRY</label>
          <input
            onChange={onChange}
            type="text"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <label htmlFor="screenDate">DATE OF SCREENING</label>
          <input
            onChange={onChange}
            type="date"
            name="screenDate"
            placeholder="mm/dd/yy"
          />
          {/* <label htmlFor="screenCommunity">LOCATION OF SCREENING</label>
          <input
            onChange={onChange}
            type="text"
            name="screenCommunity"
            placeholder="Community"
          /> */}
          {/* <input
            onChange={onChange}
            type="text"
            name="screenCountry"
            placeholder="Country"
          /> */}
        </div>
        <div>
          <label htmlFor="birthdate">DATE OF BIRTH</label>
          <input
            onChange={onChange}
            type="date"
            name="birth"
            placeholder="mm/dd/yy"
          />
          <label htmlFor="gender">GENDER</label>
          <input
            onChange={onChange}
            type="text"
            name="gender"
            placeholder="Gender"
          />
        </div>
        <div>
          <label htmlFor="height">HEIGHT</label>
          <input
            onChange={onChange}
            type="text"
            name="height"
            placeholder="0"
          />
          <label htmlFor="weight">WEIGHT</label>
          <input
            onChange={onChange}
            type="text"
            name="weight"
            placeholder="0"
          />
        </div>
        <button type="submit" variant="contained">
          CREATE RECORD
          </button>
      </form>
    </div>
  );
};


const mapStatetoProps = state => {
  return {
    user: state.user,
    isloading: state.isloading,
    communities: state.communities,
    records: state.records
  };
};
export default connect(mapStatetoProps, { addingChild })(ChildRecordNewForm);