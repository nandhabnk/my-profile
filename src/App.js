import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage/LoginPage";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import NotFoundComponent from "./components/NotFoundComponent/NotFoundComponent";
// import Employee from "./components/Test/employee";
// import EmployeeDetails from "./components/Test/employeeDetails";

import "./App.css";

function App() {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);

  // let empDetails = [
  //   {
  //     empName: "A",
  //     empId: "1",
  //     empEID: "A@gmail.com",
  //   },
  //   {
  //     empName: "B",
  //     empId: "2",
  //     empEID: "B@gmail.com",
  //   },
  //   {
  //     empName: "C",
  //     empId: "3",
  //     empEID: "C@gmail.com",
  //   },
  //   {
  //     empName: "D",
  //     empId: "4",
  //     empEID: "D@gmail.com",
  //   },
  // ];

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<NotFoundComponent />} />
        </Routes>
      ) : (
        <React.Fragment>
          <header>
            <HeaderComponent />
          </header>
          <Routes>
            <Route path="/" element={<Navigate to="/aboutme" />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
          <footer>
            <FooterComponent />
          </footer>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
