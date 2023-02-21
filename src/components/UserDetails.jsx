import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { fakeUserData } from "../api";
import { addUser, deleteUser, removeUser } from "../store/slices/UserSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
    console.log("onClick data--->", payload);
  };

  const deleteAllUser = () => {
    dispatch(deleteUser());
  };

  return (
    <>
      <div className="user-details">
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: "600",
            letterSpacing: "1px",
            textShadow: "4px 5px 5px lightslategrey",
            letterSpacing: "2px",
          }}
        >
          List of User Details
        </Typography>
        <div className="btn-class">
          <Button
            variant="contained"
            sx={{
              margin: "20px",
              backgroundColor: "green",

              "&:hover": {
                backgroundColor: "lightgreen",
                cursor: "pointer",
              },
            }}
            onClick={() => addNewUser(fakeUserData())}
          >
            Add New User
          </Button>

          <Button
            variant="contained"
            sx={{
              margin: "20px",
              backgroundColor: "darkred",
              "&:hover": {
                backgroundColor: "red",
                cursor: "pointer",
              },
            }}
            onClick={() => deleteAllUser()}
          >
            Remove all Users
          </Button>
        </div>
        <div className="display-data">
          <ul>
            <DisplayUsers />
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
