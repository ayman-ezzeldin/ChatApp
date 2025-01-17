import Messages from "./Messages"
import MessageInput from "./MessageInput"
import {BiChat} from 'react-icons/bi'
import useConversation from "../../zustand/useConversation"
import { useEffect } from "react"
import { useAuthContext } from "../../context/AuthContext"
const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // claen up function
    return ()=> setSelectedConversation(null)
  },[setSelectedConversation]) // not using selectedConversation as dependency because it will cause infinite loop

  return (
    <div className=" md:min-w-[450px] flex flex-col" >
      {/* message Header */}
      <div className="bg-slate-500 px-4 py-2 mb-2">
        <span className="label-text mr-1">To :</span>
        <span className="text-gray-900 font-bold ">{selectedConversation?.fullName}</span>
      </div>

      {selectedConversation ? (
        <>
          <Messages />
          <MessageInput />
        </>
        )
        : <NoChatSelected />
    }
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex flex-col items-center justify-center w-full min-w-96 m-auto text-white" >
      <h1 className="text-2xl font-semibold" >Welcom 👋 {authUser?.fullName} ❄</h1>
      <p className=" text-xl mb-2 text-gray-200">Select a chat to start messaging</p>
      <BiChat className="w-20 h-20 " />
    </div>
  )
}