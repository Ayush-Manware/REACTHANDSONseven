import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import EditStudent from "./EditStudent";
import AddStudent from "./AddStudent";
import LOGO from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logoContainer">
          <Link to={"/"}>
            <img src={LOGO} alt="err-/" className="logo" />
            CRUD
          </Link>
        </div>
        <div className="homeContainer">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="studentContainer">
          <Link to={"/student"}>Student</Link>
        </div>
        <div className="contactContainer">
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/student"} element={<Student />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/addStudent"} element={<AddStudent />} />
        <Route path={"/editStudent/:id"} element={<EditStudent />} />
      </Routes>
    </>
  );
};

export default Navbar;
