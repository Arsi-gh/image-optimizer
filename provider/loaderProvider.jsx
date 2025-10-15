"use client"
import React from 'react'
import { ProgressProvider } from '@bprogress/next/app';

export default function LoaderProvider({children}) {
  return (
    <ProgressProvider className="bg-red" height="4px" color="#FFFFFF" options={{ showSpinner: false }} shallowRouting >
        {children}
    </ProgressProvider>
  )
}