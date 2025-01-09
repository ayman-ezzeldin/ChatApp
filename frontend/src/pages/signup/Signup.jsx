import { Link } from "react-router"
import GenderCheckbox from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  // eslint-disable-next-line no-unused-vars
  const {loading,signup} = useSignup()
  
  async function  handleSubmit(e) {
    e.preventDefault();    
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-saturate-150 backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">SingUp
          <span className="text-blue-500 ml-2 hover:text-white transition-all duration-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} >
          <div>
            <label className="label p-2">
              <span className="label-base  ">FullName</span>
            </label>
            <input type="text" placeholder="Ayman Ezzeldin"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs, fullName: e.target.value}) }
              className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base  ">Username</span>
            </label>
            <input type="text" placeholder="aymanezz"
              value={inputs.userName}
              onChange={(e)=> setInputs({...inputs, userName: e.target.value}) }
              className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base"> Password</span>
            </label>
            <input type="password" placeholder="Enter Password"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value}) }
              className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base"> Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value}) }
              className="input input-bordered w-full h-10" />
          </div>
          <GenderCheckbox selectedGender={inputs.gender} onCheckboxChange={handleCheckboxChange} setInputs={setInputs} />
          <Link to="/login" className="text-sm inline-block text-gray-300 mt-2 hover:underline hover:text-blue-500" > Already have an account? </Link>
          <div>
            <button 
              className="btn btn-block border-none btn-sm mt-2 h-10 text-gray-200 bg-blue-500 hover:bg-blue-600 " >SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup