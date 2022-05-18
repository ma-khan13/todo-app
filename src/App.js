import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddTodo from './components/AddTodo';
import Login from './components/Login';
import CompleteTodo from './components/CompleteTodo';
import RequireAuth from './components/RequireAuth';
import Welcome from './components/Welcome';
import Notfound from './components/Notfound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route index element={<Welcome></Welcome>}></Route>
          <Route
            path="/addTodo"
            element={
              <RequireAuth>
                <AddTodo></AddTodo>
              </RequireAuth>
            }
          ></Route>
          <Route path='*' element={<Notfound></Notfound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
