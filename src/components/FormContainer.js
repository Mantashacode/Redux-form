import React from "react";
// import { Link } from "react-router-dom";
import "./FormContainer.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { formSubmit } from "../redux/form/formActions";

const FormContainer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const dispatch = useDispatch();

  const checkpwd = (e) => {
    e.preventDefault();
    if (pwd !== pwd2) alert("Password did not match");
    else {
      const data = { firstName, lastName, email, pwd };
      dispatch(formSubmit(data));
      setEmail("");
      setFirstName("");
      setLastName("");
      setPwd("");
      setPwd2("");
    }
  };

  return (
    <div className="main">
      <div className="main-container">
        <h4>Sign Up</h4>
        <form className="row g-3" onSubmit={checkpwd}>
          <div className="col-md-6">
            <label for="firstName" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label for="lastName" class="form-label">
              Lastname
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <label for="inputPassword4" class="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              value={pwd2}
              onChange={(e) => {
                setPwd2(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <button type="submit" className="btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
