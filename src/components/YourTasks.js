import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
const Todo = ({ loder }) => {
  const [reCall, setReCall] = useState(1);
  const [user] = useAuthState(auth);
  let email = user?.email;
  const [todoTasks, setTodoTasks] = useState([]);
  useEffect(() => {
    fetch(`https://cryptic-sands-85946.herokuapp.com/todo-task/${email}`)
      .then((res) => res.json())
      .then((data) => setTodoTasks(data));
  }, [email,loder, reCall]);

const handleComplete = (_id) => {
  const status = 1;
  const url = `https://cryptic-sands-85946.herokuapp.com/todo-complete/${_id}`;
  fetch(url, {
    method: "PUT",
    headers: {
      status: status,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (reCall) {
        setReCall(!1);
      } else {
        setReCall(1);
      }
    });
};

  const handleDelete = (_id, status) => {
    console.log(status);
    const proceed = window.confirm(`Are you sure want to delete?'`);
    if (proceed) {
      const url = `https://cryptic-sands-85946.herokuapp.com/todo-delete/${_id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          if (reCall) {
            setReCall(!1);
          } else {
            setReCall(1);
          }
        });
    }
  };

  return (
    <div>
      <h3 className="text-uppercase mb-3">Your Tasks</h3>
      <div className="row">
        <div className="col-12 ">
          {todoTasks.map((todoTask) => (
            <Task
              key={todoTask._id}
              todoData={todoTask}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
            ></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
