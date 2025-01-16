import {createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SocketContext = createContext();

export const SocketContextProvider = ({ children}) => {
  const [socket, setSocket] = useState(null)
  const [onLineUsers, setOnlineUsers] = useState([])

  useEffect(()=> {},[])
  return (
    <SocketContext.Provider value={{}}>
      {children}
    </SocketContext.Provider>
  )
}