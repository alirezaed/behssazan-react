import React, { useEffect, useState } from 'react';

export default function Point(props){

    const [point,setPoint] = useState(props.point);

    const handleClickLike=()=>{
        
        if (point  - props.point <1){
            setPoint(point + 1);
        }else{
            alert('You Already Liked it.')
        }
    }

    const handleClickDisLike=()=>{
        if (props.point - point  <1){
            setPoint(point - 1);
        }else{
            alert('You Already DisLiked it.')
        }
    }

    return <div style={{marginLeft:'auto'}}>
        <span onClick={handleClickLike}>👍</span>
        {point}
        <span onClick={handleClickDisLike}>👎</span>
    </div>
}