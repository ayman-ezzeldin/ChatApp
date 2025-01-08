import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = ()=> {
  const [loading, setLoading] = useState(false);

  const signup = async ({fullName, userName, password, confirmPassword, gender}) => {
    const success = handleInputErrors({fullName, userName, password, confirmPassword, gender});
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify({fullName, userName, password,confirmPassword, gender})
      })
      const data = await res.json();
      console.log(data);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { signup, loading}
}

export default useSignup

function handleInputErrors({fullName, userName, password, confirmPassword, gender}) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords don't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  if (fullName.length < 4) {
    toast.error("Full Name must be at least 4 characters");
    return false;
  }

  return true;
}