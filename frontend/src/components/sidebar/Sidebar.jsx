import Conversations from "./Conversations"
import SearchInput from "./SearchInput"
import LogoutButton from "./LogoutButton"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-slate-500 p-2 ">
        <SearchInput />
        <div className=" divider px-3"/>
        <Conversations />
      <LogoutButton />
    </div>
  )
}

export default Sidebar