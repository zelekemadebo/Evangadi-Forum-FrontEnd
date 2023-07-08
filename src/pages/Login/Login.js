import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import "./Login.css";
// to import icons
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await axios.post(
        `${process.env.REACT_APP_base_url}/api/users/login`,
        {
          email: form.email,
          password: form.password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      localStorage.setItem("auth-token", loginRes.data.token);
      navigate("/");
    } catch (err) {
      console.log("problem", err);
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  const [type, setType] = useState("password");

  // to change type attribute from 'password' to 'text' and vice versa
  const [icon, setIcon] = useState(eyeOff);
  // to change the icon when clicked
  const HandleIconChange = () => {
    // event listenforPassworder function
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="container-fluid login_page ">
      <div className="container py-5 d-md-flex justify-content-around login_container">
        <div className="main col-12 col-md-6 me-md-2 my-5 p-5 d-flex flex-column justify-content-center">
          <p className="p1">Login to your account</p>
          <p className="p2 text-center">
            Don't have an account?
            <Link to="/signup" className="a3">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="in1"
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
            />
            <input
              className="in1"
              type={type}
              name="password"
              onChange={handleChange}
              placeholder="Your Password"
            />
            <span onClick={HandleIconChange} className="showHide2">
              <Icon icon={icon} size={20} />
            </span>
            <button className="btn1">submit</button>
          </form>
          <Link to="/signup" className="a3 a1">
            Create an account?
          </Link>
        </div>
        <div className="sideNote2 col-12 col-md-6 ms-md-2  mt-sm-5">
          <p className="forTitle">About</p>
          <h1>Evangadi Networks Q&A</h1>
          <p>
            A public platform building the definitive collection of coding questions & answers
A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
          </p>
          <p>
            A public platform building the definitive collection of coding questions & answers
A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
          </p>
          <p>
            A public platform building the definitive collection of coding questions & answers
A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.
          </p>
          <button className="btn1">HOW IT WORKS</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
