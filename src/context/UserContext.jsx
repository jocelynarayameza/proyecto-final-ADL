import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext=createContext()

const UserProvider = ({children}) => {

  const [user,setUser] = useState([])
  const [userLogged,setUserLogged] = useState(false)

    const registerUser = async (datos)  => {
      const response= await axios.post("http://localhost:3001/registro",{email: datos.email, email_confirm:datos.email_confirm,
        password: datos.password,
        password_confirm:datos.password_confirm,
        username:datos.username,
        name: datos.name,
        lastname: datos.lastname,
        birthday: datos.birthday})
      localStorage.setItem("token", response.data.token)
      if (response.data.message=='Registrado satisfactoriamente'){
        alert("Registro correcto")
      } else {
        alert("Usuario ya existe")
      }
    }


  const logInUser = async (datos) => {
    const response= await axios.post("http://localhost:3001/login", {email: datos.email, password: datos.password})
    localStorage.setItem("token", response.data.token)
    console.log(response.data.msg);
    
    if (response.data.msg=="Autentificacion correcta"){
      setUser( {email: response.data.email, logged: true, token: response.data.token})
      console.log(user);
      
      alert("Autentificacion correcta")
    } else if (response.data.msg="Contrasena incorrecta") {
      alert("Contrasena incorrecta")
    } else {
      alert("No se pudo autenticar")
    }
    
  
  }


  return <UserContext.Provider value={{user,setUser,registerUser,logInUser,userLogged}}>
  {children}
  </UserContext.Provider>

}
export {UserContext, UserProvider}