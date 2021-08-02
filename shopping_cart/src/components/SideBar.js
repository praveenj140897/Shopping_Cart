import React from 'react';

export default function Sidebar(props){

    return (
        <aside className="side">
            <button onClick={()=>props.mobileButton(true)}>Mobile</button>
            <button onClick={()=>props.laptopButton(true)}>Laptop</button>
            <button onClick={()=>props.TVButton(true)}>TV</button>
        </aside>
    )

}