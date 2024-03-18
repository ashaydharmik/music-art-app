import React, { useState } from "react";
import "../Register/register.scss";
import logo from "../../../assets/logo.png"
import line from "../../../assets/line.png"
import "./login.scss";

import toast, { Toaster } from "react-hot-toast";
import { useGlobal } from "../../Context/Context";

const Login = () => {
  const {setGoToLogin} = useGlobal();
  const initialValue = { email: "", password: "" };
  const [loginData, setLoginData] = useState(initialValue);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post(
    //     "https://project-management-app-5swq.onrender.com/login",
    //     loginData
    //   );

    //   if (response.data && response.data.message) {
    //     toast.success(response.data.message);
    //     localStorage.setItem("user", JSON.stringify(response.data));
    //     setLoginData(initialValue);
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 1000);
    //   }
    // } catch (error) {
    //   console.log("Error during Login:", error);

    //   if (
    //     error.response &&
    //     error.response.data &&
    //     error.response.data.message
    //   ) {
    //     toast.error(error.response.data.message);
    //   } else {
    //     toast.error("An error occurred during Login");
    //   }
    // }
  };

  return (
    <>
         <div className="login-container">
          <div className="wrapper">
         <div className="heading">
         <img src={logo} alt=''/>
            <h1>Musicart</h1>
         </div>
         <div className="sub-heading">
          <h1>Welcome</h1>
         </div>
         <div className="login-form-container">
          <div className="form-heading">
            <p>Sign in&nbsp;<span>Already a customer?</span></p>
          </div>
         <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="info">
                
                
                <p>
                <label name="email">Enter your email or mobile number</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                <label name="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="btn-container">
               
                <button type="submit">Continue</button>
                <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
              </div>
            </form>
          </div>
         </div>
         <div className="bottom">
            <img src={line} alt=""/>
            <p>New to Musicart?</p>
            <img src={line} alt=""/>
         </div>
         <div className="btn">
               
               <button type="submit" onClick={() => setGoToLogin(false)}>Create your Musicart account</button>
              
             </div>
         </div>
        </div>

      <Toaster
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            width: "350px",
            fontSize: "18px",
          },
        }}
      />
    </>
  );
};

export default Login;
