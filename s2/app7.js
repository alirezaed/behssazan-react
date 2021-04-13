// const student={
//     firstname:'homa',
//     lastname:'ahmadi',
//     age:22
// };

// const stdList = [student,student]
// const stringList = JSON.stringify(stdList);
// console.log(stdList);
// console.log(stringList)
// console.log(JSON.parse(stringList))

fetch('https://jsonplaceholder.typicode.com/photos').then(res=>{
    console.log(res);
    return res.json();
}).then(data=>{
    console.log(data);
})