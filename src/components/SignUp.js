import React, { useRef } from "react";
import auth from '../firebase.init'
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
 const nameRef = useRef("");
 const emailRef = useRef("");
  const passwordRef = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    
     let name = nameRef.current.value;
      let email = emailRef.current.value;
      let password = passwordRef.current.value;
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
  }

   let signUpError;
   if (error) {
     signUpError = error?.message;
   }
   if (loading) {
   }
   if (user) {
     navigate(from, { replace: true });
   }
    return (
      <div className="signin mt-3">
        <p className="mb-0">Not registered yet?</p>
        <h3 className="my-3 text-uppercase">Register Now</h3>
        <form onSubmit={handleSignUp}>
          <div className="row mb-3">
            <label for="name" className="col-sm-2  col-form-label">
              Name
            </label>
            <div className="col-sm-10 col-md-6">
              <input
                type="text"
                ref={nameRef}
                className="form-control"
                id="name"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputEmail" className="col-sm-2  col-form-label">
              Email
            </label>
            <div className="col-sm-10 col-md-6">
              <input
                type="email"
                ref={emailRef}
                className="form-control"
                id="inputEmail"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10 col-md-6">
              <input
                type="password"
                ref={passwordRef}
                className="form-control"
                id="inputPassword"
                required
              />
            </div>
          </div>
          <div>
            <p className="text-danger">
              <small>{signUpError}</small>
            </p>
          </div>
          <div className="col-md-8 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary px-5">
              Register
            </button>
          </div>
        </form>
      </div>
    );
};

export default SignUp;