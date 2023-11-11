import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard"
import Login from "../src/pages/Login"
import Register from "../src/pages/Register"

function App() {
  return (
    <div>
      My App
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
