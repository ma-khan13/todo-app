import React from 'react';

const Task = ({ todoData, handleDelete, handleComplete }) => {

  const { _id, title, description, status } = todoData;

  return (
    <>
      <div className="row todo-container">
        <div className="col-md-9 col-12 ">
          <h4
            className={`${
              status == 1 ? "text-decoration-line-through" : ""
            } text-capitalize `}
          >
            {title}
          </h4>
          <p className="text-capitalize">{description}</p>
        </div>
        <div className="col-md-3 col-12 my-auto">
          <div className="row">
            <div className="col mb-2">
              <button
                onClick={() => handleComplete(_id)}
                className="btn btn-success me-3"
              >
                Complete
              </button>
            </div>
            <div className="col">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;