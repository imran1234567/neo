import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [info, setInfo] = useState({
    fm: "",
    lm: "",
    ph: "",
    ad: "",
    em: "",
    pwd: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name === "ph") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    setInfo({ ...info, [e.target.name]: value });
  };

  const handleClick = (e) => {
    const hasUpperCase = /[A-Z]/.test(info.pwd);
    const hasLowerCase = /[a-z]/.test(info.pwd);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(info.pwd);

    if (!hasUpperCase || !hasLowerCase || !hasSpecialChar) {
      alert(
        "Password must include at least one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    const data = {
      firstName: info.fm,
      lastName: info.lm,
      phone: info.ph,
      address: info.ad,
      email: info.em,
      password: info.pwd,
    };
    axios({
      method: "post",
      url: "http://13.233.106.34:4000/api/customer/register",
      data: data,
    })
      .then((res) => {
        if (res) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("REGISTER FIRST....!");
      });
  };

  return (
    <>
      <div className="register-container">
        <h2>Registration Form</h2>
        <div className="form-group">
          First Name:
          <input type="text" name="fm" onChange={handleChange} />
          <br></br>
          <br></br>
          Last Name:
          <input type="text" name="lm" onChange={handleChange} />
          <br></br>
          <br></br>
          Phone Number:
          <input
            type="number"
            name="ph"
            maxLength="10"
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          Address:
          <input type="address" name="ad" onChange={handleChange} />
          <br></br>
          <br></br>
          Email:
          <input type="email" name="em" onChange={handleChange} />
          <br></br>
          <br></br>
          Password:
          <input type="password" name="pwd" onChange={handleChange} />
          <br></br>
          <br></br>
          <button onClick={handleClick}>REGISTER</button>
          <br></br>
          Already register ?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}
