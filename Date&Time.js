let myDate=new Date()
// console.log(Date())
// console.log(myDate.toDateString())
// console.log(myDate.toString())
// console.log(myDate.toLocaleDateString('en-IN'))
// console.log(myDate.toLocaleDateString('ethiopia'))
// console.log(myDate.toTimeString());
let declaredDate= new Date(2011,0,21)
//When using date january is 0 and decemebr is 11. Numbers start from 0.
console.log(declaredDate.toDateString());
let newdDate= new Date(2011,0,21,1,12,34)
console.log(newdDate.toLocaleString())
let Timestamp= Date.now()
console.log(Timestamp)
console.log(newdDate.getTime())
