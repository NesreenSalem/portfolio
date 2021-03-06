import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
     
        <ul className="list">
          <li className="nav-links">
            <Link className="nav-ancor" to="/">
              Home
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-ancor" to="/about">
              About
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-ancor" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-links">
            <Link className="nav-ancor" to="/projects">
              Projects
            </Link>
          </li>
          
        </ul>
      </motion.nav>
    </>
  );
};

export default Navbar;