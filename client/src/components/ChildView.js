import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getChildRecord, userInfo } from "../actions/index.js"


function ChildView(props) {
  const childId = props.match.params.childid
  const comId = props.match.params.communityid
  useEffect(() => {
    props.getChildRecord(
      comId, childId
    );
    props.userInfo(sessionStorage.getItem("userId"));

  }, []);
  console.log(props.childTrack);
  if (!props.child || !props.childTrack) return <h3>Loading</h3>
  return (
    <div className="childView">
      <div className="child-profile">
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
          <p>{props.child.country_name}</p>
        </div>
        <div className="field">
          <h5> DATE OF SCREENING:</h5>
          <p>{props.child.screenDate}</p>
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
          <h5>COMMUNITY NAME :</h5>
          <p>{props.child.community_name}</p>
        </div>
      </div>
      <div className="childTrack">
        {props.childTrack.map(data => (
          <div className="record-container">
            <div className="field date">
              <h5>Date:</h5>
              <p>{data.date}</p>
            </div>
            <div className="record">
              <div className="field">
                <h5>Weight:</h5>
                <p>{data.weight}</p>
              </div>
              <div className="field">
                <h5>Height:</h5>
                <p>{data.height}</p>
              </div>
              <div className="field disc">
                <h5>Description:</h5>
                <p>{data.description}</p>
              </div>
            </div>
          </div>

        )

        )}
      </div>
    </div>
  )
}



const mapStatetoProps = state => {
  return {
    user: state.user,
    isloading: state.isloading,
    child: state.child,
    childTrack: state.childTrack
  };
};
export default connect(mapStatetoProps, { userInfo, getChildRecord })(ChildView);
