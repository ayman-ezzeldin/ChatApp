import {useState } from "react"
import {useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


const useLogOut = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext();

  const logout = async () => {
    setLoading(true)
    try {
      const res = await fetch("/api/auth/logout", {
        method: 'POST',
        headers : {"Content-Type": "application/json"}
      })
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.removeItem("chat-user");
      setAuthUser(null);
      window.location.reload();
      toast.success("Logout successful");
    } catch (error) {
      toast.error(error.message)
    }
  }

  return {logout, loading}
}

export default useLogOut