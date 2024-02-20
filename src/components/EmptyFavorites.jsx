import React from 'react'
import { HiOutlineBookmarkSlash } from "react-icons/hi2";

export const EmptyFavorites = () => {
  return (
  <div className='flex flex-col gap-5 text-bluegray--800  text-3xl items-center justify-center mt-[8.5625rem] md:mt-8 '>
    <HiOutlineBookmarkSlash className='font-[11.25rem] md:text-[8.75rem]'/>
    <h2 className='md:text-base text-center'>Você não possui nenhum filme na lista</h2>
  </div>
  )
}
