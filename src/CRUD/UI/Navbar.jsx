import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/student"}>Student</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/student'} element={<Student />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/addStudent'} element={<AddStudent />} />
        <Route path={'/editStudent/:id'} element={<EditStudent />} />
      </Routes>
    </>
  );
};

export default Navbar;
