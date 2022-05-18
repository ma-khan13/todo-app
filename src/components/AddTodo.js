import React, { useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import YourTasks from "./YourTasks";

const AddTodo = () => {
  const [user] = useAuthState(auth);
  const [loder, setLoder] = useState(1);
  const titleRef = useRef();
  const descriptionRef = useRef();

  const addTask = (e) => {
    e.preventDefault();
    let email = user?.email;
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let status = 0
    const taskDetails = {
      title,
      description,
      status,
      email
    };
    console.log(taskDetails);
    const url = "https://cryptic-sands-85946.herokuapp.com/add-task"
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (loder) {
          setLoder(!1);
        } else {
          setLoder(1);
        }
      });
    e.target.reset();
  };
  
  return (
    <div className="mt-2">
      <h1 className="text-uppercase">Add Todo</h1>
      <form onSubmit={addTask}>
        <div className="row">
          <div className="col-md-3 mb-3">
            <input
              type="text"
              ref={titleRef}
              className="form-control"
              placeholder="Title"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              ref={descriptionRef}
              className="form-control"
              placeholder="Description"
              required
            />
          </div>
        </div>
        <div className="col-12 mt-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary px-5 text-uppercase">
            Add task
          </button>
        </div>
      </form>
      <YourTasks loder={loder}></YourTasks>
    </div>
  );
};

export default AddTodo;
