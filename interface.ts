// Interface - Objects
// Cleaner and reusable and easy to maintain.
// Interface defines structure of objects

interface User{
    username : string;
    password : string;
    age : number
}

let userDetails : User = {
    username: "srinivas",
    password : "pass123",
    age: 20
}

console.log(userDetails.username)