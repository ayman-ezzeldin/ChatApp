import Message from "./Message"

const Messages = () => {
  return (
    <div className="px-4 flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent" >
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

export default Messages