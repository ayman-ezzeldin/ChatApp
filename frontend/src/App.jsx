import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "./context/authContext";


function App() {
  const [signUpClicked , setSignUpClicked] = useState(true);
  const {authUser} = useContext(AuthContext);
  return (
    <>
      <div className="p-4 h-screen flex justify-center items-center ">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : signUpClicked ? <Signup /> : Navigate({ to: "/login" })} />
          <Route path="/login" element={authUser ? Navigate({ to: "/" }) : <Login signUpClicked={signUpClicked} setSignUpClicked={setSignUpClicked} />} />
          <Route path="/signup" element={authUser ? Navigate({ to: "/" }) : <Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
