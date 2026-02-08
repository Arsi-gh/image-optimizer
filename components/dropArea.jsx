"use client"
import React, { useRef } from 'react'
import { TbCloudUpload } from "react-icons/tb";
import { IoIosImages } from "react-icons/io";
import { useImg } from '@/provider/imgProvider';

export default function DropArea() {

  const inputRef = useRef()  

  const {isDragging} = useImg()

  return (
    <>
    <div className='absolute inset-0 m-auto w-fit h-fit space-y-4 max-md:hidden'>
        <div id='drop-area' className={`w-120 h-70 rounded-2xl bg-neutral-900 border-2 border-dashed flex flex-col items-center justify-center gap-y-3 transition-all ${isDragging ? 'border-zinc-500' : ' border-zinc-700'}`}>
            <IoIosImages className='text-7xl'/>
            <p className='text-zinc-300'>Drop your images here</p>
            <p className='text-xs text-zinc-400'>Drag and drop the images or upload your files</p>
        </div>
        {isDragging && <div className='w-120 h-70 rounded-2xl absolute -left-0 -top-0 outline-4 outline-offset-3 outline-white/10 -z-10 animate-pulse'></div>}
        {/* <button className='button-style flex gap-3 items-center'>Choose file <TbCloudUpload className='text-xl'/></button> */}
        <input ref={inputRef} className='hidden' type="file"/>
    </div>
    <p className='text-sm w-fit md:hidden max-md:mx-auto mt-36'>Currently not available in selphone</p>
    {/* <p className='text-sm w-fit md:hidden max-md:mx-auto mt-36'>ur selphone cant take it</p> */}
    {/* <p className='text-sm w-fit md:hidden max-md:mx-auto mt-2'>go buy a laptop or something</p> */}
    </>
  )
}