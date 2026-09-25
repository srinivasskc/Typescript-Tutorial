// Functions

function sayHello(): void{
    console.log("Hello from sayHello function")
    // return 2
}
sayHello()


// Arrow Function
const arrowFunction= () : void=> {
    console.log("Hello from Arrow Function")
}
arrowFunction()


// Function with Parameters
const addFunction = (num1:number, num2:number) : void => {
       console.log(num1 + num2)
}
addFunction(5,7)

// Function with return type

const subFunction = (num1:number, num2:number) : number => {
        return num1 - num2
}
const sub = subFunction(7,2)
console.log(sub)


// Function with return type

const multiplyFunction = (num1:number, num2:number) : number => {
    const multiply =  num1 * num2
    return multiply
}
console.log(multiplyFunction(7,2))

// Function with Optional Parameters

const greetPerson = (name?: string) => {
    console.log(`Hi ${name}`)
}
greetPerson("Srinivas")

// Function with Optional Parameters (Question mark for the parameter)

const greetPerson2 = (name?: string) => {
    console.log(`Hi ${name}`)
    console.log("Hello without name")
}
greetPerson2()

