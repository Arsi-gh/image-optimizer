"use client"
import React, { createContext, useContext , useState } from 'react'

const PercentageContext = createContext()

export default function PercentageProvider({children}) {

  const [percentage , setPercentage] = useState(100)  

  return (
    <PercentageContext.Provider value={{percentage , setPercentage}}>
      {children}
    </PercentageContext.Provider>
  )
}

export const usePercentage = () => {
    return useContext(PercentageContext)
}