import React, { createContext,useState, useEffect } from "react";

const ActiveContext = createContext()

const ActiveProvider = ({children}) => {
  const [activeLink,setActiveLink] = useState('home')

  return <ActiveContext.Provider value = {{activeLink,setActiveLink}}>
    {children}
    </ActiveContext.Provider>
}

export {ActiveContext,ActiveProvider}
