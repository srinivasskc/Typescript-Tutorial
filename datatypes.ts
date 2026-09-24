// Data types

// String
let course:string = "TypeScript"
console.log(course)


let nameVal:string = 'Srinivas'
let fullNameVal:string =  nameVal + " Kadiyala"
console.log(nameVal)
console.log(fullNameVal)

let companyNameVal:string = "Moolya"
let description:string = fullNameVal + " works at " + companyNameVal
console.log(description)

let learning: string = `${description} and is learning Typescript`
console.log(learning)

// Number
let count:number  = 3
console.log(count)

// Boolean
let isLoggedIn:boolean = true
console.log(isLoggedIn)

// Any
let num1:any = 20
num1 = "srinivas"
num1 = true
console.log(num1)