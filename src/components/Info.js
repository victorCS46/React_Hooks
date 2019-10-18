import React,{useState} from 'react';

function Info(props){

    const x = props.items.map(item =>(
        <div key={item.id}>
            <label>{item.name}</label>
        </div>
    ));
    
    return(
        <div>{x}</div>
        
    )
}
export default Info;