"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useSettings } from './settingsProvider';

const ImgContext = createContext()

export default function ImgProvider({children}) {

  const { setPercentage } = useSettings();
  
  
  const [isDragging , setIsDragging] = useState(false)  
  const [droppedImgs , setDroppedImgs] = useState(null)

  const activeArea = (e) => {
  e.preventDefault()
    if (!isDragging) {
      setIsDragging(true)
    }
  }

  const inActiveArea = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const addEvent = (e) => {    

    ['dragenter' , 'dragover'].forEach((eName) => {
      document.getElementById('drop-area').addEventListener(eName , activeArea)
    });

    ['dragleave' , 'drop'].forEach((eName) => {
      document.getElementById('drop-area').addEventListener(eName , inActiveArea)
    });
    
    document.getElementById('drop-area').addEventListener('drop' , (e) => {
        const dataTransfer = e.dataTransfer
        const files = dataTransfer.files
        const fArray = [...files]
        const filesArray = fArray.map(file => {
          return {
            file : file,
            name : file.name,
            size : file.size,
            type: file.type,
            imgUrl :  URL.createObjectURL(file),
          }

        })
        setPercentage(100)
        setDroppedImgs(filesArray)
    })
    
  }

  useEffect(() => {
    addEvent()
  } , [])

  return (
    <ImgContext.Provider value={{isDragging , droppedImgs , setDroppedImgs}}>
        {children}
    </ImgContext.Provider>
  )
}

export const useImg = () => {
    return useContext(ImgContext)
}