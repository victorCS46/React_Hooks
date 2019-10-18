import React from 'react';

function Info(props){

    const x = props.items.map(item =>(
        <div key={item.id}>
            <div><img className="vcs-img" alt="No img" src={item.owner.avatar_url}></img></div>
            <div><label>{item.full_name}</label></div>
            <div><label>{item.language}</label></div>
        </div>
    ));
    
    return(
        <div>{x}</div>
        
    )
}
export default Info;