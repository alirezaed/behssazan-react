function calculte(a,b){

    function p2(x) {
        return x*x;
    }

    return p2(a)+p2(b)
}
//lexical scope
//closure
function createAppender(defaultValue){
    let result = defaultValue;
    function appendLine(str) {
        result += '\n' + str;
        return result;
    }
    return appendLine;
}

const appender = createAppender('first line');

const r1 = appender('secondLine');
const r2 = appender('ThirdLine');
const r3 = appender('ForthLine');

console.log(r1);
console.log('---');
console.log(r2);
console.log('---');
console.log(r3);

