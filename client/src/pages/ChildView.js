import React from "react";
import { connect } from "react-redux";

export default function Child(props) {
  console.log(props);
  return (
    <div className="alllist">
      <div className="field">
        <h5>CHILD'S NAME: </h5>
        <p>{props.child.childName}</p>
      </div>
      <div className="field">
        <h5>DATE OF BIRTH:</h5>
        <p>{props.child.birth}</p>
      </div>
      <div className="field">
        <h5> GENDER :</h5>
        <p>{props.child.gender}</p>
      </div>
      <div className="field">
        <h5>HEIGHT:</h5>
        <p>{props.child.height}</p>
      </div>
      <div className="field">
        {" "}
        <h5>WEIGHT:</h5>
        <p>{props.child.weight}</p>
      </div>
      <div className="field">
        {" "}
        <h5>COUNTRY OF SCREENING:</h5>
        <p>{props.child.countryScreening}</p>
      </div>
      <div className="field">
        <h5> DATE OF SCREENING:</h5>
        <p>{props.child.dateOfScreening}</p>
      </div>
      <div className="field">
        <h5>PARENTS' NAMES:</h5>
        <p>{props.child.parentName}</p>
      </div>
      <div className="field">
        <h5>PHONE NUMBER :</h5>
        <p>{props.child.phoneNo}</p>
      </div>
      <div className="field">
        <h5>Street Address :</h5>
        <p>{props.child.street}</p>
      </div>
      <div className="field">
        <h5>LOCATION OF SCREENING :</h5>
        <p>{props.child.countryScreening}</p>
      </div>
      <div className="field">
        <h5>COMMUNITY NAME :</h5>
        <p>{props.child.community}</p>
      </div>
      <div className="field">
        <h5>ZIPCODE :</h5>
        <p></p>
      </div>
    </div>
  );
}
