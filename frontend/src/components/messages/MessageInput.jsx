import { BiSend } from "react-icons/bi";
const MessageInput = () => {
  return (
    <div className="flex items-center gap-2 relative" >
      <input type="text" placeholder="Type a message" className=" input input-bordered rounded-none focus:outline-none w-full pr-11"  />
      <button type="submit" className="btn bg-transparent text-white border-none absolute inset-y-0 end-0 hover:bg-transparent" >
        <BiSend className="w-5 h-5 hover:text-blue-500 " />  </button>
    </div>
  );
};

export default MessageInput;
