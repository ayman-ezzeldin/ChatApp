import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import { useState } from "react";


function App() {
  const [signUpClicked , setSignUpClicked] = useState(true);
  const {authUser} = useAuthContext();
  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center ">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : signUpClicked ? Navigate({ to: "/signup" }) : Navigate({ to: "/login" }) } />
          <Route path="/login" element={authUser ? Navigate({ to: "/" }) : <Login setSignUpClicked={setSignUpClicked} />} />
          <Route path="/signup" element={authUser ? Navigate({ to: "/" }) : <Signup setSignUpClicked={setSignUpClicked} />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
