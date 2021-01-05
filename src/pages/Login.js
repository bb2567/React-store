import React, { Component } from "react";

class Login extends Component {

  // Refs
  emailRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = (event) => {
    // 1.阻止默認行為
    event.preventDefault();
    // 2.取得表單資料
    const formData = {
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    };
    console.log(formData)
    // 3.處理登入
    // 4.push切換至首頁
    this.props.history.push("/");
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
                  ref={this.emailRef}
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
                  ref={this.passwordRef}
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
