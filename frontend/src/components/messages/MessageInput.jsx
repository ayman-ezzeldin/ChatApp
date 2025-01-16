import { useState } from "react";
import { BiSend } from "react-icons/bi";
import useSendMessage from "../../hooks/useSendMessage";
const MessageInput = () => {
  const [message, setMessage] = useState('')
  const {sendMessage, loading} = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    if (message.trim() !== '') {
      await sendMessage({message});
      setMessage('');
    }
  }
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className=" w-full relative" >
        <input type="text" 
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          placeholder="Type a message" className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"  />
        <button type="submit" className=" absolute inset-y-0 end-0 flex items-center pr-3" >
          {loading ? <span className="loading loading-spinner"></span> : <BiSend className="w-6 h-6 text-white hover:text-blue-500 " />} 
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
