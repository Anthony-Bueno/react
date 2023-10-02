import React from 'react'

export const GitGrid = ({categoria}) => {


const getGifs= async()=>{
const url='api.giphy.com/v1/gifs/search?api_key=Zu8a4bt4mUtVALXoxF6KTdup7mL04i7f&q=valorant'

const resp=await fetch(url);
const {data}=await resp.json();
console.log(data);

}


getGifs();




  return (
    <>
      <h3>{categoria}</h3>
      <p>hola causaaa gaa</p>
    </>
  )
}


