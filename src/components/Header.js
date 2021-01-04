import React from "react";

class Header extends React.Component {
  renderLink() {
    const username = this.props.username;
    if (username) {
      return (
        <span className="username">
          <i className="far fa-user"></i>
          {this.props.username}
        </span>
      );
    } else {
      return (
        <>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </>
      );
    }
  }

  render() {
    return (
      <div className="header">
        <div className="grid">
          <div className="start">
            <a href="/">HOME</a>
          </div>
          <div className="end">{this.renderLink()}</div>
        </div>
      </div>
    );
  }
}

export default Header;
