import React, { Component } from "react";

import AppHeader from "../app-header";
import AppFooter from "../app-footer";
import ArticleList from "../article-list";
import ProfilePage from "../profile-page";
import Login from "../login";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./app.css";

export default class App extends Component {
  state = {
    isLogged: localStorage.getItem("isLogged"),
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
  };

  componentDidMount() {
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "12345");
  }

  render() {
    const { isLogged } = this.state;
    return (
      <div className="App">
        <Router>
          <AppHeader isLogged={isLogged} />

          <Switch>
            <Route
              path="/"
              render={() => (
                <div className="container">
                  <h1>Добро Пожаловать!</h1>
                </div>
              )}
              exact
            />
            <Route path="/news" component={ArticleList} exact />
            <Route
              path="/login"
              render={() => <Login authInfo={this.state} />}
              exact
            />
            <Route path="/profile" component={ProfilePage} exact />
            <Route
              render={() => (
                <div className="container">
                  <h1>Страница не найдена!</h1>
                </div>
              )}
            />
          </Switch>
          <AppFooter />
        </Router>
      </div>
    );
  }
}
