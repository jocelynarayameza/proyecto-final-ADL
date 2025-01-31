import { createContext, useEffect, useState } from "react";

const UserContext=createContext()

const UserProvider = ({children}) => {

  const [user,setUser] = useState([])
  const [userLogged,setUserLogged] = useState(false)

    const registerUser = async (datos)  => {
      let newUser={...datos,logged:false}
      
      const search = user.some( mail => mail.email===datos.email)

      if (search==false){
        alert("Registro correcto")
        setUser([...user, newUser])
      } else {
        alert("Usuario existente")
      } 
    }


  const logInUser = async (datos) => {
    const search=user.find(mail => mail.email===datos.email)
    
    if (datos.password===search.password){
      alert("Autentificacion correcta")
      setUserLogged(true)

    } else{
      alert("Contrasena no coincide")
    }
  
  }


  return <UserContext.Provider value={{user,setUser,registerUser,logInUser,userLogged}}>
  {children}
  </UserContext.Provider>

}
export {UserContext, UserProvider}