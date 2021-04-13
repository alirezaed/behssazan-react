
// console.log('first');

// const t1 = window.setTimeout(function(){
//     console.log('second')
// },5000);

// window.setTimeout(function(){
//     clearTimeout(t1);
// },0);


// console.log('third');

const t2 = setInterval(function (params) {
    console.log('tik');
},1000);

setTimeout(()=>{
    clearInterval(t2);
},3000)

