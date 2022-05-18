import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import SignUp from "./SignUp";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let handleSignIn = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  let logInError;
  if (error) {
    logInError = error?.message;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login mt-2">
      <h3 className="text-uppercase mb-5">Please Log in</h3>
      <form onSubmit={handleSignIn}>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2  col-form-label">
            Email
          </label>
          <div className="col-sm-10 col-md-6">
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              id="inputEmail3"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10 col-md-6">
            <input
              type="password"
              ref={passwordRef}
              className="form-control"
              id="inputPassword3"
              required
            />
          </div>
        </div>
        <div>
          {logInError ? (
            <p className="text-danger">
              <small>{logInError}</small>
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="col-md-8 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary px-5">
            Log in
          </button>
        </div>
      </form>
      <SignUp></SignUp>
    </div>
  );
};

export default Login;
