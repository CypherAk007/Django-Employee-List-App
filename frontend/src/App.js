import React, { useEffect, useState } from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import EmployeeScreen from "./screens/EmployeeScreen";
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen></HomeScreen>} exact></Route>
        <Route path="/employee/:id" element={<EmployeeScreen></EmployeeScreen>}></Route>
      </Routes>
      
    </Router>
  );
};

export default App;
