import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
const [goToLogin, setGoToLogin] = useState(false)

  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("user")) || { token: null };
  const userToken = auth.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userToken}`,
  };


  const handleSignIn=()=>{
    setGoToLogin(true)
  }


  return (
    <AppContext.Provider
      value={{
        navigate,
        handleSignIn,
        setGoToLogin,
        goToLogin
      }}
    >
      {children}

      <ToastContainer position="center" autoClose={2000} />
    </AppContext.Provider>
  );
};

const useGlobal = () => {
  return useContext(AppContext);
};
export { AppContext, useGlobal, AppProvider };
