const student={
    age:12,
    average:19,
    fname:'hasan',
    sayName:function () {
        console.log(this.fname);
    },
    sayNameArrow:()=>console.log(this.fname)
}

const student2={
    age:15,
    average:15,
    fname:'morad',
    sayName:function (a) {
        console.log(this.fname);
    },
    sayNameArrow:()=>console.log(this.fname)
}


//this change
student.sayName();
student.sayName.call(student2);
student.sayName.apply(student2);
const newStudentSayName = student.sayName.bind(student2);

newStudentSayName();

console.log('-----------')

student.sayNameArrow();
student.sayNameArrow.call(student2);
student.sayNameArrow.apply(student2);
const newStudentSayName2 = student.sayNameArrow.bind(student2);

newStudentSayName2();
