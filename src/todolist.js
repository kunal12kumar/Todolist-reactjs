import React, { useState } from 'react'
import './todolist.css'

export function Todolist() {

    
    


    return (
        <div>
            <Form></Form>
            <List></List>
            
        </div>
    )
}

function Form() {
    let [addlist,setAddlist]=useState([])
    let Showdata=(event)=>{
        
        let item=event.target.contain.value

        if (!addlist.includes(item)){
            let updatelist=[...addlist,item]
            setAddlist(updatelist)
        }else{
            alert('item already added')
        };

        
        console.log(item)
        event.preventDefault();

       
        
    }
    let list=addlist.map((value,index)=>{
        
        return(
        <Listcontain value={value} index={index} key={index} addlist={addlist} setAddlist={setAddlist}></Listcontain>
        )
    })

    return (
        <div>
        <form className='submitbox' onSubmit={Showdata}>
            <input type="text" name="contain" placeholder='PUT YOUR TEXT' className='w-[400px] md:max-w-96 h-[50px] rounded-2xl border-[2px] text-center transfrom-cap border-[#4444a1] m-5 mx-auto hover:bg-blue-100 hover:placeholder:text-center shadow-2xl'></input>
            <button className='w-[100px] h-[40px] rounded-xl border-2xl border-[2px]  bg-[#a91e8f] hover:scale-75' >ADD</button>
        </form>
        
        <List list={list}></List>

        
        
        </div>
    )
}
function List({list}) {

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
       
    )
}

function Listcontain({value,index,addlist,setAddlist}){
    let setremove=()=>{
        let finaldata=addlist.filter((v,i)=>i!=index)
        setAddlist(finaldata)
    }
    let [status,setstatus]=useState(false)

    let dounderline=()=>{
        setstatus(!status)
    }

    
    return(
        <div className='max-w-[1000px] mx-auto h-[60px]   m-4 bg-[teal] rounded-xl shadow-2xl'>
        <li className={`text-2xl font-serif wholebox ${status? 'statusbox':''}`}  >
            {value}
            <div>
            <button className='w-[70px] h-[50px] rounded-xl shadow-lg text-3xl text-center removebox border-[2px] hover:border-[#119773] hover:scale-75 hover:bg-green-500' onClick={setremove}>&times;</button>
            <button className='w-[80px] h-[50px] rounded-xl shadow-lg text-3xl text-center removebox border-[2px] mx-4 hover:border-[#119773] hover:scale-75 hover:bg-green-500' onClick={dounderline}>Done</button>
            </div>
        </li>

        
        </div>

    )
}


