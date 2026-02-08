"use client"
import { useSettings } from '@/provider/settingsProvider'
import React, { useEffect, useRef, useState } from 'react'

const qualities = [10 , 25 , 33 , 50]
const styles = [ 4 , 53 , 105 , 157 , 206]

export default function ImgQualityPercentage() {

  const {setPercentage} = useSettings()

  const [index , setIndex] = useState(0)

  const [quality , setQuality] = useState(100)

  useEffect(() => {

    if (index === 4) {
        document.getElementById("quality-input").focus()
        document.getElementById("quality-input").value = ""
        setQuality(100)
        return
    }

    if (index < 4) {
        setQuality(qualities[index])
    }

  } , [index])

  return (
    <>
    <div className='flex gap-0.5 bg-white/2 border border-zinc-800 rounded-[10px] relative text-xs font-semibold text-zinc-200'>
        <span style={{left : `${styles[index]}px`}} className={`w-[16%] ${index == 4 && "w-[24%]"} h-[83%] bg-white/5 absolute top-[3.5px] rounded-lg transition-all duration-300 border border-zinc-700 `}></span>
        <button onClick={() => setIndex(0)} className='flex-1 p-3 text-center cursor-pointer'>10%</button>
        <button onClick={() => setIndex(1)} className='flex-1 p-3 text-center cursor-pointer'>25%</button>
        <button onClick={() => setIndex(2)} className='flex-1 p-3 text-center cursor-pointer'>33%</button>
        <button onClick={() => setIndex(3)} className='flex-1 p-3 text-center cursor-pointer'>50%</button>
        <button onClick={() => setIndex(4)} className='flex-1 p-3 text-center cursor-pointer pr-4'>Custom</button>
    </div>

    <div className={`${index === 4 ? "h-8 opacity-100" : "h-0 opacity-0 -mt-3 overflow-hidden"} transition-all`}>
        <input type="number"  maxLength="2" id='quality-input' onChange={(e) => setQuality(+e.target.value)} className={`w-full p-1 px-2 rounded-lg border border-zinc-700 focus:outline-2 outline-offset-2 outline-zinc-300/80 font-semibold`} />
    </div>

    <button onClick={() => setPercentage(quality)} className='button-style w-full p-3 text-xs font-semibold text-zinc-200'>Download all</button>
    </>

  )
}
