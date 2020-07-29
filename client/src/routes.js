// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import BuyerEdit from "./pages/BuyerEdit";
import BuyerList from "./pages/BuyerList";
import ProductEdit from "./pages/ProductEdit";
import ProductList from "./pages/ProductList";
import TransactionEdit from "./pages/TransactionEdit";
import TransactionList from "./pages/TransactionList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/buyers/:id" component={ BuyerEdit }  />
              <PrivateRoute exact path="/buyers" component={ BuyerList }  />
              <PrivateRoute exact path="/products/:id" component={ ProductEdit }  />
              <PrivateRoute exact path="/products" component={ ProductList }  />
              <PrivateRoute exact path="/transactions/:id" component={ TransactionEdit }  />
              <PrivateRoute exact path="/transactions" component={ TransactionList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;