const germanCarBrands= ["BMW","AMG","VW"]
const americanCarBrands=["GM","DODGE","FORD"]
 germanCarBrands.push(americanCarBrands)
// // console.log(germanCarBrands)
// //What is happening here when i push a array into an another array is, the whole array americanCars is taken as a single input rather than taking elements inside it as multiple input.

// console.log(germanCarBrands[3]) 
// console.log(germanCarBrands[3][1])
// //To acces the elements of that array we have to specify the index of the sub array and the index of the elements inside it.
 let cars=americanCarBrands.concat(germanCarBrands)
// console.log(cars)
//To Join two array we have to use the .concat() operator and store that inside a variable
let allcars=[...americanCarBrands,...germanCarBrands]
// console.log(allcars)
// The ...arrayname is called a spread operator, this works the same way as concat but it is easier to use.Develeopers use this instead of concat.
let newArr=[1,2,3,[4,5,6],7[8,9[10,11]]]
//To sort this above array out,we can use the .flat() operator.
let newArray=newArr.flat(Infinity)
// console.log(newArray.flat(Infinity))
//The .flat()  operator takes argumnets, on how many layers of array it has to sort, by giving infinity as an argumnet we don't have to worry about the specific numbers of layesrs that has to be sorted.
console.log(Array.isArray("Nick"))
//This will return false because "Nick" is a string
console.log(Array.from("Nick"))
//This will give out an array that is spreadout, can be used to create a new array
let var1=200
let var2=300
let var3=400
console.log(Array.of(var1,var2,var3))
//Array.of() can be used to create an array using variabeles
console.log(Array.from({name:"Nick"}))
