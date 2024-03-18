import React from "react";
import "./auth.scss";
import Header from "./Navbar/Header/Header";
import Footer from "./Navbar/Footer/Footer";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { useGlobal } from "../Context/Context";


const Auth = () => {
  const {goToLogin} = useGlobal();
  return (
    <>
      <section className="authentication">
      <div className="header-box">
      <Header/>

</div>
       <div className="auth-box">

        {goToLogin ? <Login /> : <Register />}
       </div>
<div className="footer-box">
        <Footer/>

</div>
      </section>
    </>
  );
};

export default Auth;
