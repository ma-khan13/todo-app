import React from 'react';
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { Link, Outlet } from 'react-router-dom';
import './Home.css'
const Home = () => {
  let userName = auth?.currentUser?.displayName;
  let [user] = useAuthState(auth);
  let handleSignOut = () => {
    signOut(auth);
  };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 app-heading">
            <h1>Todo app</h1>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-4 col-md-2 app-nav">
                <ul>
                  {user ? (
                    <>
                      <li>
                        <Link className="text-info" to="/">
                          Hello {userName}
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to={"/login"}>Log In</Link>
                    </li>
                  )}
                  <li>
                    <Link to={"/addTodo"}>Add Task</Link>
                  </li>

                  {user ? (
                    <>
                      <li>
                        <Link to="/" onClick={handleSignOut}>
                          Log Out
                        </Link>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
              <div className="col-8 col-md-10 mx-auto app-content">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;