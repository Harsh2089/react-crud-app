import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFoundPage from "./views/errors/NotFoundPage";
import UserAddPage from "./views/home/UserAddPage";
import UserEditPage from "./views/home/UserEditPage";
import UserListingPage from "./views/home/UserListingPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserListingPage} />
        <Route path="/edit/:email" component={UserEditPage} />
        <Route path="/add" component={UserAddPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
