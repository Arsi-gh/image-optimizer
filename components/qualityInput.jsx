"use client"
import React, { useRef, useState } from 'react'
import { usePercentage } from '@/provider/percentageProvider'

export default function QualityInput() {

  const {percentage , setPercentage} = usePercentage()

  const [inputValue , setInputValue] = useState(percentage)

  const inputRef = useRef()

  return (
    <div className='w-full bg-inherit backdrop-blur-xl p-3 space-y-3 text-sm h-fit bottom-0 left-0 border-t border-zinc-800'>
        <span className='w-full flex gap-3'>
            <input onChange={(e) => setInputValue(e.target.value)} ref={inputRef} value={inputValue} className='flex-1 p-2 rounded-lg border border-zinc-700' type="number" />
            <button onClick={() => setPercentage(inputValue)} className='button-style text-xs'>Apply</button>
        </span>
        <button className='button-style w-full p-3 text-xs'>Download all</button>
    </div>
  )
}
