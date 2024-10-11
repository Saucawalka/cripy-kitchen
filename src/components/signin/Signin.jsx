import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import img1 from '../../assets/apple-logo.png'
import pic1 from '../../assets/google .png'
import { useNavigate } from "react-router-dom";
import check from "../../assets/check.png";
import AlertComponent from "../success/AlertComponent";
import { Link } from "react-router-dom";
const Signin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState(false);
  const [alert, setAlert] = useState({ icon: "", message: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const url = "http://localhost:5010/info/signin";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError({ email: "", password: "" });

    axios
      .post(url, { email, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.token = res.data.token;
          setNotify(true);
          setAlert({ icon: check, message: res.data.message });

          setTimeout(() => {
            navigate("/home");
          }, 6000);
        }
      })
      .catch((err) => {
        console.log("error,", err);
        setError((prev) => ({ ...prev, message: "Login failed. Please try again." }));
      });
  };

  const handleBlur = () => {
    const newError = { email: "", password: "" };
    if (email.trim() === "") {
      newError.email = "Enter a valid email address.";
    }
    if (password.trim() === "") {
      newError.password = "Enter password.";
    }
    setError(newError);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError((prev) => ({ ...prev, email: "" })); // Clear email error
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError((prev) => ({ ...prev, password: "" })); // Clear password error
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNotify(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [notify]);

  return (
    <Fragment>
      <div
        style={{
          scale: notify ? "1" : "0",
          right: '0',
          transition: "all 0.5s ease-in-out",
        }}
        className="position-fixed w-25"
      >
        <AlertComponent icon={alert.icon} message={alert.message} />
      </div>
      <div className="mx-auto my-5 wait p-5 shadow-sm rounded-5  w-50">
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-center">Login</h2>
          
          <div className="w-100 ">
            <label className="fs-6 fw-bold mb-2 mt-4">Email </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              className={error.email ? "form-control mb-1 is-invalid" : 'form-control mb-1'}
              onBlur={handleBlur}
            />
            <small>
              {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
            </small>
          </div>

          <div className="w-100 ">
            <label className="fs-6 fw-bold mb-1">Password </label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className={error.password ? "form-control mb-1 is-invalid" : 'form-control mb-1'}
              onBlur={handleBlur}
            />
            <small>
              {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
            </small>
          </div>

          <div className="text-center">
          <button type="submit" className="btn btn-dark text-white fs-6 fw-bold  mt-4 w-50 ">Login</button>
          <div> {error.message && <p className="text-danger fs-6">{error.message}</p>}</div>
          <p className="p">Dont have an account? <span className="span"><Link to={'/signup'}>Sign Up</Link></span>

</p><p className="p line">Or With</p>

<div className="flex-row align-items-center">
  <button className="btn but border-1  border-dark border google">
  <img src={pic1} alt=""  width={35}/>

    Google 
    
  </button><button className="btn but border-1  border-dark border apple">
<img src={img1} alt=""  width={35}/>

    Apple 
     
</button></div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Signin;
