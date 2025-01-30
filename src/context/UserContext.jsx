import { createContext, useEffect, useState } from "react";

const UserContext=createContext()

const UserProvider = ({children}) => {
  let userList=[]
  
const [user,setUser] = useState([])

console.log(user);
  const registerUser = async (datos)  => {

    console.log(user);
    
      setUser([...user, datos])
      alert("Registro correcto")
      console.log(user);
      
  }

  



  return <UserContext.Provider value={{user,setUser,registerUser}}>
  {children}
  </UserContext.Provider>

}
export {UserContext, UserProvider}