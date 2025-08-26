
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css"
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [applicants, setApplicants] = useState(null);

  useEffect(() => {
    // Check localStorage for logged-in user
    const storedApplicants = localStorage.getItem("Applicants");
    try {
      setApplicants(storedApplicants ? JSON.parse(storedApplicants) : null);
      { storedApplicants?.role === "admin" && <Link to="/adminDashboard">Admin</Link> }
      { storedApplicants?.role === "student" && <Link to={`/home`}>Home</Link> }

    } catch (error) {
      console.error("Error parsing Applicants from localStorage:", error);
      localStorage.removeItem("Applicants");
    }
  }, []); // Runs once when the component mounts

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-navbar light-text  shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-3xl font-bold  tracking-wider">🎓 GISP</span>
          </div>
          <div className="hidden uppercase text-lg gap-x-1 md:flex space-x-8">
            {applicants ? (
              <>
                <NavLink
                  to={`/home`}>
                  Home
                </NavLink>
                <NavLink
                  to={`/overview`}>
                  Overview
                </NavLink>
                <NavLink
                  to={`/scholarships`}>
                  Scholarships
                </NavLink>
                <NavLink
                  to={`/contact`}>
                  Contact
                </NavLink>
                <NavLink
                  to={`/profile`}>
                  Profile
                </NavLink>
                {applicants.role === "admin" && (
                  <NavLink
                    to="/adminDashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#FFA500] uppercase tracking-widest"
                        : "hover:text-[#FFA500] transition uppercase tracking-widest"
                    }
                  >
                    Admin dashboard
                  </NavLink>
                )}
              </>
            ) : (
              <>
                <NavLink
                  to="/signup">
                  Sign Up
                </NavLink>
                <NavLink
                  to="/">
                  Login
                </NavLink>
              </>
            )}
          </div>
          <div className="md:hidden transition-all duration-300">
            <span onClick={toggleMenu} className="material-symbols-outlined hover:text-[#FFA500] focus:outline-none">
              {isOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 flex flex-col justify-center items-start uppercase text-base pt-2 pb-3 space-y-1 sm:px-3 bg-navbar shadow-md">
          {applicants ? (
            <>
              <NavLink
                to={`/home`}
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Home
              </NavLink>
              <NavLink
                to={`/overview`}
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Overview
              </NavLink>
              <NavLink
                to={`/scholarships`}
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Scholarships
              </NavLink>
              <NavLink
                to={`/contact`}
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Contact
              </NavLink>
              <NavLink
                to={`/profile`}
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Profile
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Sign Up
              </NavLink>
              <NavLink
                to="/"
                className=" mx-2 my-0.5 focus:underline focus:underline-offset-4 transition-all duration-300">
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
