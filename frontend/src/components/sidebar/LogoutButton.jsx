import { BiLogOut } from "react-icons/bi";
import useLogOut from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogOut();
  return (
    <div className=" mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logout}
          className=" w-8 h-8 text-white cursor-pointer"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
