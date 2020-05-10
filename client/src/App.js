import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Communities from "./components/Communities";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import CreateACountry from "./components/CreateACountry";
import CreateAUser from "./components/CreateAUser";
import Children from "./components/Children";
import CreateACommunity from "./components/CreateACommunity";
import ChildRecordNewForm from "./components/ChildRecordNewForm";
import LogInForm from "./components/LogInForm";
import Menu from "./components/Menu";
import AllUsers from "./components/AllUsers";
import Countries from "./components/Countries";

import Header from "./components/Header";

function App(props) {
  // sessionStorage.clear();
  if (props.isloading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  return (
    <div>
      <PrivateRoute path="/:username">
        <Route path="/" component={Header} />
        <Route path="/createACountry" component={CreateACountry} />
        <Route path="/:username/users" component={AllUsers} />
        <Route exact path="/:username/admin" component={Countries} />
        <Route path="/:username/user/:countryname/:country_id" component={Communities} />
        <Route path="/:username/admin/:countryname/:country_id" component={Communities} />
        <Route exact path="/:username" component={Menu} />
        <Route path="/childRecord" component={ChildRecordNewForm} />
        <Route path="/:username/users/createAUser" component={CreateAUser} />
        <Route
          path="/:country/communities/createacommunity"
          component={CreateACommunity}
        />
        <Route
          path="/:country/:countryid/communities"
          component={Communities}
        />
        <Route path="/:country/communities" component={Communities} />
        <Route
          exact
          path="/:countryid/:communityid/children"
          component={Children}
        />
        <Route
          exact
          path="/:country/:countryid/:community/:id/children"
          component={Children}
        />
      </PrivateRoute>

      <Route exact path="/" render={props => <LogInForm {...props} />} />
    </div>
  );
}

export default connect(state => state)(App);
