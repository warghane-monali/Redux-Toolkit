import React from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import UserDetails from "./UserDetails";
import DisplayUsers from "./DisplayUsers";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/UserSlice";
import { fakeUserData } from "../api";

const Navbar = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
    console.log("onClick data--->", payload);
  };
  return (
    <>
      <div className="main-div">
        <div className="nav-div">
          <div>
            <Avatar
              sx={{
                margin: "20px",
                width: "60px",
                height: "60px",
                margin: "30px",
              }}
              src="assets/reduxlogo.png"
            />
          </div>
          <div>
            <h2
              className="title"
              style={{ fontWeight: "600", letterSpacing: "1px" }}
            >
              Redux Tool Kit
            </h2>
          </div>
          <div className="menu">
            <ul className="main-div-ul" style={{ cursor: "pointer" }}>
              <li>Home</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Users</li>
            </ul>
          </div>
        </div>
        <UserDetails />
      </div>
    </>
  );
};

export default Navbar;
