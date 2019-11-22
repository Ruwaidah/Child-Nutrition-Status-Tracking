import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Child from "../pages/ChildView";

function Children(props) {
  console.log(props.communities);
  let children = props.communities[props.match.params.id].childs;

  if (props.userAllInfo.usertype)
    children =
      props.communities[props.match.params.countryid].communities[
        props.match.params.id
      ].childs;

  if (!children) return <h1>Loading</h1>;

  return (
    <div className="list-div">
      <button
        onClick={event => {
          event.preventDefault();
          props.history.goBack();
        }}
      >
        Back
      </button>
      <Link to={`/childRecord`}>add Child</Link>
      <h2>Children</h2>
      {children.map(child => (
        <Child child={child} />
      ))}
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    userinfo: state.user,
    userAllInfo: state.userInfo,
    communities: state.data
  };
};
export default connect(mapStatetoProps, {})(Children);
