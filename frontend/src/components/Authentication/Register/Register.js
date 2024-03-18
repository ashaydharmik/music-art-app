import React, { useState } from "react";
import "./register.scss";
import logo from "../../../assets/logo.png"
import toast, { Toaster } from "react-hot-toast";
import { useGlobal } from "../../Context/Context";


const Register = () => {
  const {setGoToLogin} = useGlobal();
  const initialValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [registerData, setRegisterData] = useState(initialValue);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post(
    //     "https://project-management-app-5swq.onrender.com/register",
    //     registerData
    //   );

    //   if (response.data && response.data.message) {
    //     toast.success(response.data.message);
    //     localStorage.setItem("user", JSON.stringify(response.data));
    //     setRegisterData(initialValue);
    //     setShowLogin(true);
    //   }
    // } catch (error) {
    //   console.log("Error during registration:", error);

    //   if (
    //     error.response &&
    //     error.response.data &&
    //     error.response.data.message
    //   ) {
    //     toast.error(error.response.data.message);
    //   } else {
    //     toast.error("An error occurred during registration");
    //   }
    // }
  };

  return (
    <>
     
        <div className="register-container">
          <div className="wrapper">
         <div className="heading">
         <img src={logo} alt=''/>
            <h1>Musicart</h1>
         </div>
         <div className="sub-heading">
          <h1>Welcome</h1>
         </div>
         <div className="register-form-container">
          <div className="form-heading">
            <p>Create Account&nbsp;<span>Don’t have an account?</span></p>
          </div>
         <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="info">
                <p>
                  <label name="name">Your name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={registerData.name}
                    onChange={handleChange}
                  />
                </p>
                <p>
                <label name="mobile">Mobile number</label>
                  <input
                    type="number"
                    placeholder="Email"
                    name="mobile"
                    value={registerData.mobile}
                    onChange={handleChange}
                  />
                </p>
                <p>
                <label name="email">Email Id</label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={registerData.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                <label name="password">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="btn-container">
                <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Musicart. Message and data rates may apply.</p>
                <button type="submit">Continue</button>
                <p>By continuing, you agree to Musicart privacy notice and conditions of use.</p>
              </div>
            </form>
          </div>
         </div>
         <p className="bottom">Already have an account? <span onClick={() => setGoToLogin(true)}>Sign in</span></p>
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

export default Register;
