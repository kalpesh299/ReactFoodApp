import React from 'react'
import data from "./data.json"

export const Quots = () => {
  return (
    <div>
        {
            data.quotes.map((el)=>{
                return <blockquote class="shadow-lg rounded-xl my-4 border-l-4 border-yellow-200 bg-blue-200  dark:bg-gray-800 p-4 md:w-1/2  xl:w-1/2 m-auto ">
                <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white"> "{el.quote}"</p>
            </blockquote>
            })
        }
     
    </div>
  )
}
