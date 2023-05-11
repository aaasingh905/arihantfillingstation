import React from "react";
import "./index.css";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        background: "lightblue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul className="nav-list-container">
        <li>Logo</li>
        <li>Add Record</li>
        <li>View Record</li>
        <li>Borrower's list</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Header;
