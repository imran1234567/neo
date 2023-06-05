import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [info, setInfo] = useState({ em: "", pwd: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    const data = {
      email: info.em,
      password: info.pwd,
    };
    axios({
      method: "post",
      url: "http://13.233.106.34:4000/api/customer/login",
      data: data,
    })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("head3").innerText = "LOGIN FAILED!";
      });
  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <br></br>
        <br></br>
        <div className="form-group">
          ENTER EMAIL:
          <input type="email" name="em" onChange={handleChange} />
          <br></br>
          <br></br>
          ENTER PASSWORD:
          <input type="password" name="pwd" onChange={handleChange} />
          <br></br>
          <br></br>
          <input
            type="button"
            value="LOGIN"
            className="btn-log"
            onClick={handleClick}
          />
          <br></br>
          Forgot{" "}
          <Link to="/forgot" style={{ color: "blue" }}>
            Password ?
          </Link>
          <h3 id="head3"> </h3>
        </div>
      </div>
    </>
  );
}
