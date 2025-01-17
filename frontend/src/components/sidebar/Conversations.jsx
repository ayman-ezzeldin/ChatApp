import useGetConversations from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation?._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner"></span>}
    </div>
  );
};

export default Conversations;
