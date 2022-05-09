import React from "react";
// import { Link } from "react-router-dom";
import "./FormContainer.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { formSubmit } from "../redux/form/formActions";

const FormContainer = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pwd, setPwd] = useState(null);
  const [pwd2, setPwd2] = useState(null);

  const dispatch = useDispatch();

  return (
    <div className="main">
      <div className="main-container">
        <h4>Sign Up</h4>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="firstName" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
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
              onChange={(e) => {
                setPwd2(e.target.value);
              }}
            />
          </div>
          <div class="col-12">
            <button
              type="submit"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                if (pwd !== pwd2) alert("Password did not match");
                else {
                  const data = { firstName, lastName, email, pwd };
                  dispatch(formSubmit(data));
                }
              }}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContainer;
