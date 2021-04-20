import React from 'react';

//Class Component
//Function Component

//هر بخشی که قابل استففاده مجددد هست
//هر بخشی که پیچیدگی زیادی داره 

export default function App(props){

    return <ul>
        <li>First Name : <b>{props.name}</b></li>
        <li>Last Name : {props.lastname}</li>
        <li>Age : {props.age}</li>
    </ul>
}

export class ClassApp extends React.Component{



    render(){
        const { name,lastname,age } = this.props;

        return <ul>
            <li>First Name : <b>{name}</b></li>
            <li>Last Name : {lastname}</li>
            <li>Age : {age}</li>
        </ul>

    }


}
