import React from 'react';
import Title from './Title';

//Class Component
//Function Component > 16.8

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

    constructor(props){
        super(props);
        this.state={
            newAge:this.props.age,
            name:this.props.name
        }
        this.addAge = this.addAge.bind(this);
        this.changeName = this.changeName.bind(this);
    }

    addAge(){
        //Overload 1 (object)
        // this.setState({
        //     newAge:30
        // });

        const callBackFunction=()=>{
            console.log('after change state:',this.state.newAge);
        }
        //Overload 2 (function(object=>object))
        this.setState((prevState)=>{
            return {
                newAge:prevState.newAge+1
            }
        },callBackFunction);
    }

    
    changeName(){
        this.setState({
            name:'NEW NAME'
        });
    }

    render(){
        const { lastname } = this.props;
        const { newAge,name } = this.state;

        const rootStyle={
            color:'blue'
        }
        const btnStyle={
            border:'1px solid red',
            backgroundColor:'Yellow',
            margin:'3px',
            cursor:'pointer'
        }

        console.log(this.state);
        return <ul style={rootStyle}>
            <Title label="First Name" value={name} />
            <Title label="Last Name" value={lastname} />
            <Title label="Age" value={newAge} />
            <button style={btnStyle} onClick={this.addAge} >Increase Age</button>
            <button style={btnStyle} onClick={this.changeName} >Change Name</button>
        </ul>
    }
}
