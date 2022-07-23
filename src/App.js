import React from "react";
import "./style.css";
import {useEffect,useState} from 'react'

export default function App() {
 const[equipo, setEquipo] = useState([])
 
  useEffect(()=>{
    obtenerDatos()

  },[])

   const obtenerDatos = async()=>{
     const data = await fetch('https://jsonplaceholder.typicode.com/users')
     const users=await data.json()
     setEquipo(users)
   }
  return (
    <>
    <div>
       <h1>Listado</h1>
       <ul>
           {
             equipo.map(item =>(
               <li key="item.id">{item.id}-{item.name} - {item.email}</li>
             ))
           }
       </ul>
    </div>
    </>
  );
}
