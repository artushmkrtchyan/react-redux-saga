import React from "react";
import { Route } from "react-router-dom";
import PublicLayout from "../modules/layouts/public";

export const PublicRoute = ({ component: Component, ...rest }) => (
  <PublicLayout>
    <Route {...rest} render={props => <Component {...props} />} />
  </PublicLayout>
);
