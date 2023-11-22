import React from 'react'
import { useEffect,useState } from 'react';
import data from "../components/fooddata.json"
import { Card } from '../components/Card';

export const Foods = () => {
  const[fooddata,foodsetdata]=useState([]);
const[filterdata,setfilterdata]=useState([]);
const[textvalue,settextvalue]=useState("");

useEffect(()=>{
  foodsetdata(data.restaurants);
})
// console.log(fooddata);
useEffect(()=>{
    
  if(textvalue!=""){
    const filteredData = fooddata.filter((el) =>
       el.name.includes(textvalue)
  );
  setfilterdata(filteredData);
  }else{
  
    setfilterdata(fooddata);
  }


},[textvalue,fooddata])
console.log(filterdata)
  console.log("it is working")
  return (
    <div className="bg-white">
   
    <input value={textvalue} type="text" placeholder='search' className='border-2 bg-yellow-300 border-black w-1/3 m-auto block p-3  mt-4 rounded-3xl shadow-sm shadow-white' onChange={(e)=>settextvalue(e.target.value)}/>
   
     <div className='flex flex-wrap justify-evenly w-screen'>
            
            {filterdata.map((el,idx)=>{
              if(idx<30) return <Card el={el}/>
            })}

     </div>

  </div>
  )
}
