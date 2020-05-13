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
    username: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    isLogged: localStorage.getItem("isLogged"),
  };

  componentDidMount() {
    this.setAuthInfo("admin", "12345", false);
  }

  setAuthInfo = (username, password, isLogged) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("isLogged", isLogged);
    this.setState({ username, password, isLogged });
  };

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
              render={() => (
                <Login authInfo={this.state} setAuthInfo={this.setAuthInfo} />
              )}
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
