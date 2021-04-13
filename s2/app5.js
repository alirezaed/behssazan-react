class Person{
    constructor(){
        console.log('constructor');
        this.firstName = 'Alireza'
    }

    sayHello(){
        console.log(this.firstName);
    }

    goodbyAndSayHello(){
        console.log('good by');
        this.sayHello();
    }
}

class Student extends Person{
    constructor(){
        super();
        console.log('std constructor');
    }
}


const s1 = new Student();

s1.goodbyAndSayHello();