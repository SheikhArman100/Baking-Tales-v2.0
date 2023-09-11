import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Button = ({name,...props}) => {
  return (
    <button className=' h-12 w-40 relative mt-4 group flex items-center justify-center gap-x-2'>
        <p  className='text-sm font-medium text-textColor text-center group-hover:text-left transition-all duration-300'>{name}</p>
        <ArrowRight stroke='white'  className='hidden  group-hover:block transition-all duration-300'/>

        
        <div className='w-full h-[80%] border border-textColor  group-hover:h-full absolute top-[50%] left-0 transition-all duration-300 -translate-y-[50%]'/>
        <div className='h-full w-[90%] border border-textColor group-hover:w-full absolute top-0  left-[50%] transition-all duration-300 -translate-x-[50%]'/>
    </button>
  )
}

export default Button