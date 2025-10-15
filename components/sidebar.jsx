"use client"
import React from 'react'
import ImgWrapper from './imgWrapper'
import QualityInput from './qualityInput'
import { useImg } from '@/provider/imgProvider'

export default function Sidebar() {

  const {droppedImgs} = useImg()

  return (
    <section className='w-90 h-screen flex flex-col gap-3 border-r border-zinc-800 '>

      <div className='space-y-3 p-3 h-full overflow-auto'>
        {droppedImgs && droppedImgs.map((img , index) => <ImgWrapper key={index} img={img} />)}
      </div>

      <QualityInput/>

    </section>
  )
}
