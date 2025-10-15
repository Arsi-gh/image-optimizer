"use client"
import React from 'react'
import { useImg } from '@/provider/imgProvider';
import { HiMiniTrash } from "react-icons/hi2";

export default function ClearBtn() {

  const {setDroppedImgs} = useImg()

  return (
    <button onClick={() => setDroppedImgs(false)} className='cursor-pointer p-2 flex gap-2 items-center rounded-full bg-red-900 fixed bottom-6 right-6 text-sm group overflow-hidden'>
        <p className='-ml-2 h-5 w-0 group-hover:w-14 group-hover:ml-0 transition-all duration-300 overflow-hidden'>Clear All</p>
        <HiMiniTrash className='text-xl'/>
    </button>
  )
}
