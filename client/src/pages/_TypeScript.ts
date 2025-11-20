
let user:{
    name:string,
    age:number,
    gender:"male" | "female " | "Other",
    isStudent:boolean
}={
    name:"Abhishek",
    age:50,
    gender:"male",
    isStudent:true
}

console.log(user);

// let user2:{
//     name:string,
//     age:number | string,
//     gender?:"male" | "female" | "other"
// }={
//     name:"John Deo",
//     age: 5
// };

// console.log(user2);

// type UserT={
//     name:string,
//     age:number,
//     gender:"male" | "female" | "other"
// }

// Interface

// interface User{
//     name:string,
//     age:number,
//     gender:"male"|"female" |"other"
//     email:string,
//     phone:string
// }

// Admin interface

// const name:string="abhisehk"
// console.log(name);

// let age:number=34;
// console.log(age);

// type User={
//     name:string;
//     age:number;
//     isStudent:true
// }
// const user:User={
//     name:"abhisehk",
//     age:45,
//     isStudent:true
// }

// console.log(user);

// let number:number=45;
// const name:string="random"
// console.log(number);
// console.log(name);


// let number:number[]=[4,6,6,7,3,7,7];
// let name=["random","alisa","john Deo"];
// console.log(name);
// console.log(number);

// let value:string| number;
// value="random";
// value=45;
// console.log(value);
