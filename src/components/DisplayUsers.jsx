import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.user;
  });
  console.log("data....", data);

  const removeSingleUser = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      {data.map((items, id) => {
        return (
          <>
            <div className="add-delete">
              <li key={id}>{items !== undefined ? items : "no data"}</li>
              <DeleteForeverIcon
                sx={{ cursor: "pointer" }}
                onClick={(id) => removeSingleUser(id)}
              />
            </div>
            <hr style={{ width: "100%" }} />
          </>
        );
      })}
    </>
  );
};

export default DisplayUsers;
