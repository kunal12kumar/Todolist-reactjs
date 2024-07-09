import React, { useState } from 'react'
import {data} from './question'

export  function Faq() {

  let [showfaq,setShowfaq]=useState(false)

  
  return (
    <div>
         {data.map((question,i)=>{
          let itemdetails={
            showfaq,
            setShowfaq,
            question
          }
        return (
          
        
            
            <Faqcomponent itemdetails={itemdetails} key={i}></Faqcomponent>
      
        )
    })}
    </div>
  )
}


function Faqcomponent({itemdetails}){
 let {showfaq,setShowfaq,question}=itemdetails

return (
    <div className='m-3'>
        <h1 className={`w-[90%] h-10  border-[2px] rounded-xl border-blue-950 mx-auto cursor-pointer `} onClick={()=>setShowfaq(question.id)}>{question.title}</h1>
        <p className={`before ${showfaq===question.id? 'after':''}`}>{question.body}</p>
        {console.log(showfaq)}
    </div>
)
}
