import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({
    user: '',
    email: '',
  })

  return (
    <UserContext.Provider value={{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserContext must be used within a UserContextProvider')
  }
  return context;
}