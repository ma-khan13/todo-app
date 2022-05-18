import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
      <div>
        <h1 className="mt-3 text-uppercase">Welcome to my todo app</h1>
        <p className="text-capitalize mt-3">
          Click the Add Task button to create a list of all your important tasks
          today...
          <Link to="/addTodo">add task</Link>
        </p>
      </div>
    );
};

export default Welcome;