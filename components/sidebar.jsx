"use client"
import React from 'react'
import ImgCard from './imgCard'
import { useImg } from '@/provider/imgProvider'
import ImgControl from './imgControl'

export default function Sidebar() {

  const {droppedImgs} = useImg()

  if (droppedImgs) return (
    <section className='min-w-82 max-w-82 h-screen flex flex-col gap-3 p-3 relative max-md:hidden'>

      <div className='space-y-3 p-1 pr-3 pb-8 h-full w-full relative overflow-y-auto'>
        {droppedImgs && droppedImgs.map((img , index) => <ImgCard key={index} img={img} />)}
      </div>
      <div className='relative'>
        <div className='w-[100%] h-16 absolute -top-18 left-0 z-10 image-wrapper bg-neutral-900'></div>
        <ImgControl/>
      </div>

    </section>
  )
}


// 

// <span className='w-[95%] h-20 absolute bottom-0 left-0 z-10 image-wrapper bg-neutral-900'></span>