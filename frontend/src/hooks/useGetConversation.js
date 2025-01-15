import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversation = () => {
  const [loading, setLoading] = useState()
  const [conversation, setConversation] = useState([])

  useEffect(()=> {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false);
      }
    }
    getConversations();
  },[])
  return {conversation,loading}
}

export default useGetConversation