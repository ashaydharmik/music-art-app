import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Authentication/Auth";
import PrivateComponent from "./components/PrivateComponent/PrivateComponent";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateComponent />}>
        
        </Route>

        <Route path="/" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
