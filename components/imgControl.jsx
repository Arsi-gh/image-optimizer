"use client"
import React, { useRef, useState } from 'react'
import { useSettings } from '@/provider/settingsProvider'
import ImgTypeSettings from './imgTypeSettings'
import { useImg } from '@/provider/imgProvider'
import ImgQualityPercentage from './imgQualityPercentage'

export default function ImgControl() {
  
  const {percentage , setPercentage} = useSettings()
  
  const [inputValue , setInputValue] = useState(percentage)
  
  const inputRef = useRef()
  
  const {setDroppedImgs} = useImg()
  
  return (
    <div className='w-full bg-inherit p-3 space-y-3 text-sm h-fit bottom-0 left-0 border rounded-xl border-zinc-700/50'>
        <ImgTypeSettings/>
        <ImgQualityPercentage/>
        <button onClick={() => setDroppedImgs(false)} className='cursor-pointer w-full rounded-lg text-xs p-2 bg-red-800/40 border border-red-900/50 font-semibold text-zinc-100'>Clear all</button>
    </div>
  )
}
