//PrimitiveType valuetype --> number,boolean,string,undefined,null
//Object //refrencetype  --> object,array,date,reqex

//function --> call (), reference

const arr = [
    {
        name:'mohamad',
        age:12
    },
    {
        name:'abtinb',
        age:22
    },
    {
        name:'reza',
        age:18
    }
];

function filterAge(item){
    return item.age < 20;
}

const under20 = arr.filter(filterAge);


console.log(under20);

//anonymouse function
//iife
(function (a,b){
    console.log('execute');
    return a*b+2;
}(2,3))

//ASSIGN VARIABLE
console.log(zarb2(3,4));
function zarb2(a,b){
    console.log('execute');
    return a*b+2;
}


// console.log(zarb(3,4));
// const zarb  = function (a,b){
//     console.log('execute');
//     return a*b+2;
// }


// const under20 = arr.filter(function(){
//     return true;
// });

//Arrow Function
const zarb  = function (a,b){
    console.log('execute');
    return a*b+2;
}

const zarb3 = a => a*a*a;
function zarb4(a){
    return a*a*a;
}
console.log(zarb3(3));
console.log(zarb4(3));

const under20_2 = arr.filter(item=> item.age < 20);
console.log(under20_2);

//Destructuring
//Object destructuring
const room ={
    hasWindow:true,
    title:'First',
    hasTV:false
}

// const hasWindow = room.hasWindow;
// const hasTV = room.hasTV;
// const title = room.title;
const { hasTV,title,hasWindow } = room;


if (hasWindow){
    ///
}   

if (hasTV){
    //asdasd
}

const fullTitle = `Room ${title} ${hasWindow ? "has window":""}`;

console.log(fullTitle);

//Array Destructuring
// const person1 = arr[0];
// const person2 = arr[1];
// const person3 = arr[2];
const [person1,,person2] = arr;
console.log(person2);


const fullroom ={
    hasDoor:true,
    title:'new title',
    ...room
}

console.log(fullroom);

const arr2 = ["new item",...arr];

console.log(arr2);

const p1={
    item1:'item1',
    item2:'item2'
}

const p2={
    item3:'item3',
    item2:'item22'
}

const result = {
    ...p1,
    ...p2
}

console.log(result);