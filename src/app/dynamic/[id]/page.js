"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter();
    const id = router.query
    
  return (
    <div>Page {id}</div>
  )
}

export default Page
