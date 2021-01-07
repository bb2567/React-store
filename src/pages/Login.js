import React from "react";
import { useForm } from "react-hook-form";

export default function Login(props) {
  //
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 3.處理登入
    // 4.push切換至首
    // this.props.history.push("/");
  };
  console.log(errors);

  return (
    <>
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className={`input ${errors.email && "is-danger"}`}
                type="text"
                placeholder="Email"
                name="email"
                ref={register({
                  required: "email is required",
                  pattern: {
                    value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                    message: "invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="helper has-text-danger">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className={`input ${errors.password && "is-danger"}`}
                type="text"
                placeholder="Password"
                name="password"
                ref={register({
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "cannot be less than 6 digits",
                  },
                })}
              />
              {errors.password && (
                <p className="helper has-text-danger">{errors.password.message}</p>
              )}
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
