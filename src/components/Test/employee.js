import React from "react";
import "./employee.scss";

const Employee = (props) => {
  return (
    <React.Fragment>
      <h1>Employee Details</h1>
      <h5>Employee Form</h5>
      <form className="empForm">
        <div>
          <label htmlFor="empName">Emp Name: </label>
          <input id="empName" type="text" />
        </div>
        <div>
          <label htmlFor="employee">Emp Id: </label>
          <input id="empId" type="text" />
        </div>
        <div>
          <label htmlFor="empEID">Emp Email ID: </label>
          <input id="empEID" type="text" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Employee;
