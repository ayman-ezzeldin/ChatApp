
const Message = () => {
  return (
    <div className="chat chat-end ">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
      <time className="text-xs chat-header opacity-50">12:45</time>
      <div className="chat-bubble bg-blue-500 text-white">You were the Chosen One!</div>
      <div className="chat-footer opacity-50">Delivered</div>
    </div>
  );
};

export default Message;
