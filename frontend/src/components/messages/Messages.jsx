import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message"

const Messages = () => {
  const {messages,loading} = useGetMessages();  
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length >0 &&
        messages.map((message) => <Message key={message?._id} message={message} /> ) 
      }
      { !loading && messages.length === 0 && (<p className="text-center text-white">No messages yet</p>) }
      {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  )
}

export default Messages


{/* <div className="px-4 flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent" >
      
      </div> */}