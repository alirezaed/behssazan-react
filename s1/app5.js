const fname = "ali";
const lname = "hasani";

const fullName = fname + " " + (lname || " no lastname");

console.log(fullName)

function hello(name="noname"){
    console.log('Hello ' + name);
}


//call
hello();

//reference
const xx = hello;

[10,2].sort(hello);

xx('mahmood');

console.log(hello());