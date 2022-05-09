import React from "react";
import { useSelector } from "react-redux";
import "./DisplayForm.css";

const DisplayForm = () => {
  const mydata = useSelector((state) => state.data);
  return (
    <div className="displayForm">
      {mydata.length !== 0 ? (
        <div className="displayFormHeading">Form Data</div>
      ) : (
        <div className="displayFormHeading">Nothing to display</div>
      )}
      {mydata?.map((element) => {
        return (
          <div className="displayContent">
            <ul>
              <li>Firstname:{element.FirstName}</li>
              <li>LastName:{element.LastName}</li>
              <li>Email:{element.Email}</li>
              <li>Password:{element.password.slice(0, 2)}******</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayForm;
