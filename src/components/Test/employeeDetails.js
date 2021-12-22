import React from "react";
import { useState, useEffect } from "react";
import "./employeeDetails.scss";

const EmployeeDetails = (props) => {
  const [empDetails, setEmpDetails] = useState(props.empData);

  const empDelete = (empDelId) => {
    let updatedEmpDetails = empDetails.filter((empObj) => {
      if (empObj.empId !== empDelId) {
        return empObj;
      }
    });

    console.log(empDelId, updatedEmpDetails);
    setEmpDetails(updatedEmpDetails);
  };

  const employeeListHtml = () => {
    const empHtml = empDetails.map((empObj) => {
      return (
        <div className="empDataList">
          <div className="empCard">
            <div>Employee Name: {empObj.empName}</div>
            <div>Employee ID: {empObj.empId}</div>
            <div>Employee Email ID: {empObj.empEID}</div>
          </div>
          <div className="empOptions">
            <button onClick={() => empDelete(empObj.empId)}>Edit</button>
            <button onClick={() => empDelete(empObj.empId)}>Delete</button>
          </div>
        </div>
      );
    });
    return empHtml;
  };

  return <React.Fragment>{employeeListHtml()}</React.Fragment>;
};

export default EmployeeDetails;
