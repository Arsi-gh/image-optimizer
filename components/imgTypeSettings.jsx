"use client"
import { useSettings } from '@/provider/settingsProvider'
import React from 'react'

export default function ImgTypeSettings() {

  const {imgType , setImgType} = useSettings()  

  return (
    <div className='flex gap-1 bg-white/2 border border-zinc-800 rounded-[10px] relative font-semibold text-xs'>
      <span className={`w-[30.5%] h-[83%]  bg-white/5 absolute top-[4px] rounded-lg transition-all duration-300 border border-zinc-700/70 ${imgType == "webp" ? "left-1" : imgType == "jpeg" ? "left-24" : "left-47"}`}></span>
      <button onClick={() => setImgType("webp")} className='flex-1 p-3 text-center cursor-pointer'>WEBP</button>
      <button onClick={() => setImgType("jpeg")} className='flex-1 p-3 text-center cursor-pointer'>JPG</button>
      <button onClick={() => setImgType("png")} className='flex-1 p-3 text-center cursor-pointer'>PNG</button>
    </div>
  )
}
