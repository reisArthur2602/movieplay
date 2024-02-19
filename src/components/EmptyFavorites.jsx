import React from 'react'
import { HiOutlineBookmarkSlash } from "react-icons/hi2";

export const EmptyFavorites = () => {
  return (
  <div className='flex flex-col gap-5 text-bluegray--800  text-3xl items-center justify-center mt-[137px] '>
    <HiOutlineBookmarkSlash size={180}/>
    <h2>Você não possui nenhum filme na lista</h2>
  </div>
  )
}
