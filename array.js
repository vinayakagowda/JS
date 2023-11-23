const myArr=[1,2,3,4,5,6]
// myArr.push(7)
// console.log(myArr)
// //Array in javascript when modified create shallow copies, in the sense when a value is changed it is changed in the original value,like heap.
// myArr.pop()
// myArr.unshift(10)
// console.log(myArr)
// myArr.shift()
// console.log(myArr)
// //The below operations on an array are called questionire operations.
// console.log(myArr.includes(4))
// //This returns a true or false value.
// console.log(myArr.indexOf(12))
// //This returns -1 because 12 does'nt exist in the array
// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)
//The .join() method is used to commbine two arrays and return the result in the form of a string.


//---------slice & splice---------------
let arr = [0,1,2,3,4,5]
const myAr=arr.slice(2,5)
console.log(myAr)
let arr2= arr.splice(2,5)
console.log( `this is splice operation,${arr2}`)
console.log(`now the original array is manupilated but splice.${arr}`)
//.Splice includes the range and manupulates the original array, While .slice does'nt include the range and does'nt manupulate the orignal array.
