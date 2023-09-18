import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({className,children}) => {
  return (
    <div className={twMerge("relative w-48 xl:w-52 xl:h-68 h-64 bg-accentColor2 p-1",className)}>
        {children}

    </div>
  )
}
const CardContainer=({className,children})=>{
    return(
        <div className={twMerge("relative w-full h-full flex flex-col items-center justify-between py-3  group/card cursor-pointer",className)}>
            <div className="h-[96%] w-full border-[0.5px] border-black absolute top-[50%] left-0 -translate-y-[50%] group-hover/card:h-full transition-all " />
            <div className="w-[94%] h-full border-[0.5px] border-black  absolute top-0 left-[50%] -translate-x-[50%] group-hover/card:w-full transition-all  " />
            {children}


        </div>

    )
}
const CategoryIcon=({className,icon})=>{
    return(
        <div className={twMerge("h-10 w-10 border p-2 border-black border-dotted rounded-full flex items-center justify-center group-hover/card:hidden transition-all",className)}>
            <Image src={icon} alt="category icon" className="h-full w-full"/>
        </div>
    )

}
const CardInfo=({className,title,price})=>{
    return(
        <div className={twMerge("flex flex-col items-center font-semibold group-hover/card:hidden transition-all",className)}>
            <h4>{title}</h4>
            <span>${price}</span>

        </div>
    )
}
const BgRemoveImage=({className,bgRemoveImage})=>{
    return(
        <div className={twMerge("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-32 group-hover/card:hidden transition-all",className)}>
        <Image
            src={bgRemoveImage}
            alt="card image bg remove"
            className="object-cover w-full h-full"
          />

    </div>
    )
}
const CardImage=({className,cardImage})=>{
    return(
        <div className={twMerge("w-full h-full absolute top-0 left-0 scale-0 group-hover/card:scale-100 transition-all duration-[0.4s] ",className)}>
            <Image
            src={cardImage}
            alt="card image hover"
            className="w-full h-full object-cover"
            placeholder="blur"
          />

        </div>
    )

}
const CardButtonWrapper=({className,children})=>{
    return(
        <div className={twMerge("absolute top-[60%] left-1/2 -translate-x-1/2 scale-0 group-hover/card:scale-100 transition-all delay-200",className)}>
          {children}
        </div>
    )
}
Card.CardContainer=CardContainer
Card.CategoryIcon=CategoryIcon
Card.CardInfo=CardInfo
Card.BgRemoveImage=BgRemoveImage
Card.CardImage=CardImage
Card.CardButtonWrapper=CardButtonWrapper

export default Card