"use client"
import React, { createContext, useContext , useState } from 'react'

const SettingsContext = createContext()

export default function SettingsProvider({children}) {

  const [imgType , setImgType] = useState("webp")

  const [percentage , setPercentage] = useState(100)  

  return (
    <SettingsContext.Provider value={{percentage , setPercentage , imgType , setImgType}}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => {
    return useContext(SettingsContext)
}