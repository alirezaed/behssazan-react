//Promise
const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('after 5 sec');
    }, 5000);

});


p1.then(data=>{
    console.log(data);
    return 'after then1'
}).then(data2=>{
    console.log(data2);
}).catch(er=>console.log(er));