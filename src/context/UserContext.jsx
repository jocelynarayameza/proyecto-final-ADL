import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext=createContext()

const UserProvider = ({children}) => {
  const navigate = useNavigate()

  const [user,setUser] = useState("")


    const registerUser = async (datos)  => {
      const res= await axios.post("http://localhost:3001/api/registro",{email: datos.email, email_confirm:datos.email_confirm,
        password: datos.password,
        password_confirm:datos.password_confirm,
        username:datos.username,
        name: datos.name,
        lastname: datos.lastname,
        birthday: datos.birthday})
      localStorage.setItem("token", res.data.token)
      if (res.data.msg=='Registrado satisfactoriamente'){
        alert("Registro correcto")
      } else {
        alert("Usuario ya existe")
      }
    }


  const logInUser = async (datos) => {
    const res= await axios.post("http://localhost:3001/api/login", {email: datos.email, password: datos.password})
    localStorage.setItem("token", res.data.token)
    
    if (res.data.msg=="Autentificacion correcta"){
      setUser( {email: res.data.email, logged: true, token: res.data.token})
      navigate('/')

      
      alert("Autentificacion correcta")
    } else if (res.data.msg="Contrasena incorrecta") {
      alert("Contrasena incorrecta")
    } else {
      alert("No existe el usuario")
    }
  }

  // const profileUser = async()=>{
  //   const token= user.token
  //   const res= await axios.get('http://localhost:3001/api/perfil',{
  //     headers:{
  //       Authorization:`Bearer ${token}`,
  //   },
  // })
  // const userData=res.data;
  // setUser({...userData, logged: true})
  // }

  // function profileUserfunc(){
  //   useEffect(()=>{
  //      profileUser()
      //  console.log(userData);
       
      //  setUser(data)
      //  console.log("user",user);
  //   },[])
  // }


  return <UserContext.Provider value={{user,setUser,registerUser,logInUser}}>
  {children}
  </UserContext.Provider>

}
export {UserContext, UserProvider}