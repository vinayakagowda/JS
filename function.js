function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    //Once you return something, anything after the return statement will be become unvalid.
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("enter a valid username")
        return

    }

    return `${username} just logged in `
    
}//What this function does is,it checks for a valid username if the username is an empty string or is undefined then it enters the if block.

// console.log(loginUserMessage(1))
function spreadoperator(...number1){
    return number1
//what the spread operator does is it combines all the value and gives out an array.
}
// console.log(spreadoperator(100,200,300))
function spread(num1,num2,...num3){
    return num3
    //When there is a spread operator in the last of parameter, the non spread operator occupies one value and the spread operator will occupy the remaining values.

} 
// console.log(spread(100,200,300,400,500))
let obj1={
    username:"nick",
    age:23
}
function objasparameter(anyobject){
    //When giving an object as a parameter to a function, we cannot directly pass the object as the parameter.
    //So we create a proxy object,and access the contents of an object using this proxy.
return `The user name is ${anyobject.username} the users age is ${anyobject.age}`
}
// console.log(objasparameter(obj1))//Here the anyobject argument is taken as the original object.
//We can also pass an object inside a function call directly.
console.log(objasparameter({
    username:"AnnaBond",
    age:30
})
)
const arr=[100,200,300]
function getarray(getarray){
    return getarray[1]

}
console.log(getarray(arr))