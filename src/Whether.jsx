import React, { useState } from 'react'
import sun from './sunset.jpg'
import axios from 'axios'

export const Whether = () => {
  const [data,setData]=useState();
  const [data1,setData1]=useState();


  let handlechange = (event) =>{
    setData1(event.target.value);
  };

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
      console.log(response)
      setData(response.data);
      setData1('')

    }
    catch(e)
    {
      alert('not found')
    }
  

  };
  return (
    <div className='sun'>
      <form className='' onSubmit={handleSubmit}>
       <div>
        <input type='text'onChange={handlechange} value={data1?data1:''} className='h-11 mt-5 bg-transparent border-black border-2 rounded-3xl ms-[500px] text-center placeholder:text-white w-64' placeholder=' Enter location'  />
       </div>
       <div className='text-8xl ms-44 mt-28'>{data?.name}</div>
       <div className='text-4xl text-white ms-44 mt-14'>{data?.main?.temp}</div>
       <div className='text-4xl text-white ms-44 mt-14'>{data?.main?.pressure}</div>
       <div className='text-4xl text-white ms-44 mt-14'>{data?.weather[0]?.main}</div>

       <div className='bg-white/45 w-[650px] h-32 mt-14 ms-80 flex flex-wrap'>
        <div className='flex flex-col m-auto'>
        <div className='text-black m-auto text-xl font-bold'>Max temp</div>
        <div className='text-black m-auto text-xl font-bold'>{data?.main?.temp_max}</div>
        </div>
        <div className='flex flex-col m-auto '>
        <div className='text-black m-auto text-xl font-bold'>Humidity</div>
        <div className='text-black m-auto text-xl font-bold'>{data?.main?.humidity}</div>
        </div>
        <div className='flex flex-col m-auto'>
        <div className='text-black m-auto text-xl font-bold'>Feelslike</div>
        <div className='text-black m-auto text-xl font-bold'>{data?.main?.feels_like}</div>
        </div>
       </div>
       </form>

    </div>
  )
}
