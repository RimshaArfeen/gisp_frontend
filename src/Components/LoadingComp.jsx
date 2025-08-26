
import React from 'react'
import { useState } from 'react'
const LoadingComp = () => {
     const [Loading, isLoading] = useState(true)
  return (
      <div className=" relative  z-50 flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-950"></div>
      </div>
   
  )
}

export default LoadingComp
