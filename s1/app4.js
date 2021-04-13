const list = [500,20,120,30,80,160];

const listLessThan100 = list.filter(function (item){
    return item < 100;
});

const listLessThan100DivideByTwo = listLessThan100.map(function(item){
    return item / 2;
});

console.log(listLessThan100);
console.log(listLessThan100DivideByTwo);


// function comparer (a,b){
//     return b - a;
// }

// list.sort(comparer);


// const list2 = list.slice();

// list[0] = "bademjan";
list.splice(1,1);
console.log(list);
list.shift();
console.log(list);
//console.log(sortedList);

const str1 = 'sib,golabi,khiar,porteghal';

console.log(list.join(' ~ '))

