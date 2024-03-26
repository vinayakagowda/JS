// const a=100;
// if(true){
//     let a=300;
//     // console.log('inner a:',a)
    
    
// }
// //  console.log('outer a',a)
// //There are two variables with the same name, both of them have the same name. One variable is insde the if block, this makes it block specific
// //Other variable is considered as a global scope.
const arr1=[10,20,30]
const arr2=[40,50,60]
// const arr3=[arr1+arr2]
// console.log(arr3)
const arr3=[...arr1,...arr2]
// console.log(arr3)
function one(){
    const username="Nick"
    function two(){
        console.log(username)//A child function can access the variables of a parent function,but a parent function can't access the child functions variables.

        const name="Nikhil"
    }
    // console.log(name)//This line wont be executed because it is outside the scope of function two().This will throw an erorr.
    two()//We have to call the child function inside a parent function, for it to be executed.
}
// one()
if(true){
    const bikecompany="Royal Enfield"
    if(bikecompany==="Royal Enfield"){
        const bikename="Continetal GT"
        console.log(bikecompany + bikename)
    }
//     console.log(bikename)//This log is outside the block of the inner if statement.

 }
// console.log(bikecompany)//This is outside of the block scope.
//+++++++++++++++++++++++++++++++++++Things to know about js functions++++++++++++++++++++++++++++++++++++++++++++++++++++
addone(5)//This is accepted in javascript, calling a function first and then later decalring the function.
function addone(num){
return num+1
}
addtwo(5)//This is unexpected because we called the function before the function was initialized.
const addtwo=function(num){
    return num+2
}
//Basically both are functions but their declaration is different.One is just a function and two is a  function declared inside of a variable
