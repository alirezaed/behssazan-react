import React from 'react';
import ReactDOM from 'react-dom';
import MyCompo,{ ClassApp } from './App';

const students = [
    {name:'hasan',lastname:'ahmadi',age:12},
    {name:'mitra',lastname:'hasani',age:16},
    {name:'shabbnam',lastname:'moradi',age:20},
    {name:'karim',lastname:'ghaderi',age:30}
]
const list2 = students.map((student,index)=><ClassApp 
    key={index}
    name={student.name} 
    lastname={student.lastname} 
    age={student.age} 
/>)


ReactDOM.render(list2,document.getElementById('root'));