import React from 'react';


export default function Avatar(props){



    return <div style={{display:'flex',flexFlow:'row'}}>
        <img style={{width:'100px',borderRadius:'100px'}} src={props.imageurl} />
        <span style={{margin: 'auto 10px',fontWeight:'bold'}} >{props.username}</span>
    </div>

}