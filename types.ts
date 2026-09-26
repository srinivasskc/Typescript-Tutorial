// Types

type Users = {
    username : string;
    password : string;
    age: number;
    gender : string
}

let userDetails1 : Users = {
    username: "srinivas",
    password : "pass1223",
    age: 33,
    gender: "male"
}

console.log(userDetails1.gender)


// Types with restricted values
type status = "Pass" | "Fail" | "Skipped"

let testStatus : status = "Pass"
console.log(testStatus)