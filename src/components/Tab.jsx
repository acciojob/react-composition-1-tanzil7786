import React,{useState} from 'react';


const Tabs=({info,id})=>{
console.log(id);
const [content,setContent]=useState(id=='tabs1'?'Content for Tab 1':'Content for Tab A');
    return(
    <div id={id}>
     <div>
        {info.map((tab)=><li key={tab.title} onClick={()=>setContent(tab.content)}>{tab.title}</li>)}
     </div>
     <p>{content}</p>
     </div>
    )
}
export default Tabs;