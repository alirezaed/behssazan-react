import React from 'react';


function Title(props){
    console.log('render title');
    return <li>{props.label} : <b>{props.value}</b></li>
}

export default Title;