import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, ...props }) {
  const authorized = props.isAuthenticated;
  console.log('PrivateRoute authorized:',authorized);
  console.log('PrivateRoute localStorage["access_token"]:',localStorage["access_token"]);

  return (
    <Route
      {...props}
      render={props =>
        authorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default connect(store => ({ isAuthenticated: store.isAuthenticated })) (PrivateRoute);
