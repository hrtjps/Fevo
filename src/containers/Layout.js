import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../routes";
import Footer from "./Footer";
import NewHeader from "./NewHeader";
const Layout = () => {
  return (
    <div className="app">
      <NewHeader />
      <div className="app-body">
        <main className="main">
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => <route.component {...props} />}
                />
              ) : (
                <div>Could not find page!</div>
              );
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
