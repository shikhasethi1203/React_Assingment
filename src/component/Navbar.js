import React from "react";
import "./Navbar.css";
import Switch from "@mui/material/Switch";

function Navbar({ toggleChange }) {
  return (
    <header>
      <h3>Navbar</h3>

      <Switch
        onChange={toggleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </header>
  );
}

export default Navbar;
