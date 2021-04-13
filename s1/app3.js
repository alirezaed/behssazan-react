// const newPerson={
//     lastname:'hasani',
//     'first Name' :'alireza',
//     address:{
//         street:'Bahar',
//         number:'12'
//     },
//     asdasd:function(){

//     }
// };

// newPerson["firstName"] = "hosein";

// const newPerson2 = newPerson;

// newPerson2.lastname = 'akbari';

// console.log(newPerson.lastname);
// console.log(newPerson2.lastname);

// const number1 = 112;

// let number2 = number1;

// number2 = 3;

// console.log(number1);
// console.log(number2);


const person = new Object();

person.aaa = 'asdasd';


console.log(person);

function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

function createPerson(firstName,lastName){
    return {
        firstName,
        lastName
    }
}

// const x2 = {
//     firstname:'',
//     lastname:''
// }


const x1 = new Person('ali','moosavi');
const x2 = x1;//new Person('ali','moosavi');
const x3 = createPerson('ji','tomy');

console.log(x1);
console.log(x2);
console.log(x1 === x2);
