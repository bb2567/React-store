import React from "react";

export default function UserProfile(props) {
  return (
    <div className="user-profile">
      <p className="title has-text-centered">Profile</p>
      <fieldset disabled>
        <div className="field">
          <div className="control">
            <label className="label">Nickname</label>
            <input className="input" type="text" defaultValue="admin" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Email</label>
            <input className="input" type="text" defaultValue="admin@163.com" />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label">Type</label>
            <input className="input" type="text" defaultValue="Manager" />
          </div>
        </div>
      </fieldset>
      <br />
      <br />
      <div className="field is-grouped is-grouped-centered">
        <div className="control">
          <button className="button is-danger">Logout</button>
        </div>
        <div className="control">
          <button
            className="button"
            type="button"
            onClick={() => {
              props.close();
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
