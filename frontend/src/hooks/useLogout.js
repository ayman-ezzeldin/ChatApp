import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/authContext";

const useLogOut = ()=> {
  const {setAuthUser} = useContext(AuthContext);

  const logOut = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "delete",
      })
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.clear("chat-user", JSON.stringify(data));
      // toast.success("Signup successful");
      setAuthUser(null);
      // window.location.reload();
      // context
      
    } catch (error) {
      toast.error(error.message);

  }
  return { logOut}
}

export default useLogOut

