import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../UseContext/Parentcontext";
export default function Effect(){
    
        const[count,setCount]=useState(0)
        const[Age,setAge]=useState(60)
        const {isDark,setisDark}=useContext(AppContext)
    
    useEffect(()=>{

    })
    return(
        
        <div style={{
            backgroundColor: isDark ? "black" : "white",
            color: isDark ? "white" : "black"
        }}>
            <button onClick={()=>{
setisDark(!isDark)
            }}>Theme Change</button>
            <h1>Use Effect</h1>
        <h1>count={count}</h1>
        <h1>Age={Age}</h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>count</button>
        <button onClick={()=>{
            setAge(Age-1)
        }}>Decrease the age</button>
        
        </div>
    )
} 