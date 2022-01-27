import React from "react";
import { NavLink } from "react-router-dom";

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
