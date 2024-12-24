import GenderCheckbox from "./GenderCheckbox"

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto" >
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 backdrop-saturate-150 backdrop-blur-lg bg-opacity-10 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">SingUp
          <span className="text-blue-500 ml-2 hover:text-white transition-all duration-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-base  ">FullName</span>
            </label>
            <input type="text" placeholder="Ayman Ezzeldin" className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base  ">Username</span>
            </label>
            <input type="text" placeholder="aymanezz" className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base"> Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="input input-bordered w-full h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-base"> Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="input input-bordered w-full h-10" />
          </div>
          <GenderCheckbox />
          <a href="#" className="text-sm inline-block text-gray-300 mt-2 hover:underline hover:text-blue-500" > Already have an account? </a>
          <div>
            <button className="btn btn-block border-none btn-sm mt-2 h-10 text-gray-200 bg-blue-500 hover:bg-blue-600 " >SignUp</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup