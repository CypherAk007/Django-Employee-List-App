import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { employeesActions } from "../store/employees";

const EmployeeScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const { data } = await axios.get(`/api/employee/${id}`);
        console.log(data);
        dispatch(employeesActions.populateIndividualEmployee(data));
      } catch (e) {
        console.log(e);
      }
    };

    fetchEmployee();
  }, []);

  const employee = useSelector((state) => state.employeesReducer.singleEmployee);

  const buttonClickHandler = () =>{
    navigate(`/`)
  }
  return (
    <div>
      <img src={employee.image}></img>
        <div>{employee.name}</div>
        <div>{employee.designation}</div>
        <div>{employee.email}</div>
        <div>{employee.phone}</div>
        
        <button onClick={buttonClickHandler}>BACK</button>
        
    </div>
  );
};

export default EmployeeScreen;
