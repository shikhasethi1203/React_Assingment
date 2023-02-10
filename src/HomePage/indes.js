import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Search from "../component/Search";
import Card from "../component/Card";
import "./index.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/login");
  }, []);

  return (
    <div>
      <div className="button-wrapper">
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}>
          Logout
        </Button>
      </div>
      <Navbar toggleChange={handleChangeToggle} />

      {toggle ? <Card /> : <Search />}
    </div>
  );
};

export default HomePage;
