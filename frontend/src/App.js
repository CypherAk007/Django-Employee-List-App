import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const { data } = await axios.get("/api/employees");
      console.log(data, typeof data);
      setEmployees(data);
    };
    fetchEmployees();
  }, []);
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Designation</th>
          <th>phone Number</th>
        </tr>
        {employees && employees.map((employee) => {
          console.log(employee.id);
          return (<tr>
            <td>{employee.id} </td>
            <td>{employee.name}</td>
            <td>{employee.designation}</td>
            <td>{employee.phone}</td>
          </tr>)
          
        })}
      </table>
      {/* {employees} */}
    </div>
  );
};

export default App;
