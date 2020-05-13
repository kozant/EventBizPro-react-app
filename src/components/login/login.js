import React, { Component } from "react";
import { Redirect } from "react-router";

import "./login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLogged: "",
    error: "",
  };

  componentDidMount() {
    const { isLogged } = this.props.authInfo.isLogged;
    this.setState({ isLogged });
  }

  onChangeField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendData = () => {
    const { authInfo } = this.props;
    const { username, password } = this.state;
    if (authInfo.username === username && authInfo.password === password) {
      this.setState({ isLogged: true });
    } else {
      this.setState({ error: "Имя пользователя или пароль введены не верно" });
    }
  };

  render() {
    const { isLogged, error } = this.state;
    if (isLogged) {
      return <Redirect to="/profile" />;
    }
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Регистрация</h1>
              <div className="error">{error}</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      name="username"
                      placeholder="Имя пользователя"
                      type="text"
                      onChange={this.onChangeField}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      name="password"
                      placeholder="Пароль"
                      type="password"
                      onChange={this.onChangeField}
                    />
                  </fieldset>
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    onClick={this.sendData}
                  >
                    Отправить
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
