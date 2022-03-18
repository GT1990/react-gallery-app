// React
import React from "react";
// React Router Dom
import { NavLink } from "react-router-dom";

/**
 * Nav Component
 * @returns - Defaut Nav Links
 */
const Nav = () => {
  const linksData = [
    {
      path: "/jeep",
      text: "Jeep",
    },
    {
      path: "/moraine-lake",
      text: "Moraine Lake",
    },
    {
      path: "/orcas",
      text: "Orcas",
    },
  ];

  /**
   * links() Loops through and array and creates NavLinks
   * @returns - Returns a Nav link for each object in the linksData array
   */
  const links = () => {
    let navLinks = [];
    linksData.forEach((link, index) => {
      navLinks.push(
        <li key={index}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      );
    });
    return navLinks;
  };
  return (
    <nav className="main-nav">
      <ul>{links()}</ul>
    </nav>
  );
};

export default Nav;
