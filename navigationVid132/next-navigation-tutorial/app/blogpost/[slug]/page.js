"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const page = () => {
    const router = useRouter();
    const params = useParams();

    // uses useffect to got to dashboard after almost 2 seconds
    // useEffect(() => {
    //   setTimeout(() => {
    //     router.push('/dashboard')
    //   }, 2333);
    
      
    // }, [])
    
  return (
    <div>
      {params.slug}
      <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
    </div>
    
  )
}

export default page
