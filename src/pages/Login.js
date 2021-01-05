import React, { Component } from "react";

class Login extends Component {
  // state
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    // 1.阻止默認行為
    event.preventDefault();
    // 2.取得表單資料
    console.log(this.state);
    // 3.處理登入
    // 4.push切換至首頁
    // this.props.history.push("/");
  };

  handleChang = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="login-wrapper">
          <form className="box login-box" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChang}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChang}
                />
              </div>
            </div>
            <div className="control">
              <button className="button is-fullwidth is-primary">Login</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
