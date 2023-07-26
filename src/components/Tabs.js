import React,{useState} from 'react'

const Tabs = ({arr}) => {
let [tabObj,settabObj]=useState("");
  return (
    <div>
        
           <ul>
            {
                 arr.map((obj,i)=>{
                    return (
                        <li onClick={()=> settabObj(obj)} key={i}>{obj.title}</li>
                    )
                })
            }
           </ul>
        <div>{tabObj.content}</div>
    </div>
  )
}

export default Tabs