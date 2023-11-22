// const score = 100
// const newScore= new Number(300.897)
// //this is also a way to declare numbers.When declared like this,we can perform operations and it's typesafe.
// console.log(score)
// console.log(newScore)
// console.log(newScore.toString())
// //.toString() is used to convert a number into a string
// console.log(newScore.toFixed(4))
// //toFixed () is used to fix the how many decimal values you choose to display.toFixed(4) displays 300.8970
// console.log(newScore.toPrecision(4));
// //toPrecision() is used to round of the decimal values. The output is returned as string.Should be careful when using this operator.
// const hundreds= 1000000
// console.log(hundreds.toLocaleString('en-IN'))
//toLocaleString() converts our numbers into nicely spaced out readable decimals. It converts numbers into american way of counting system, but can be converted to any decimal system by passing aurgguments inside the method.
//this will give out the indian way of counting numbers
//-------------------------------------------------------MATH---------------------------------------------------------------------------
// console.log(Math) 
// console.log(Math.abs(-10))
// //Math.abs() returns positive values when a negative number is passed inside it.
// console.log(Math.round(12.98))
// //Math.round() rounds off decimal number to the nearest number, This example will round off to 13.
// console.log(Math.ceil(10.24))
// //Math.ceil() will round up to 11
// console.log(Math.floor(10.24))
// //Math.floor() will round down to 10.
// console.log((Math.random()*10)+1)
//Math .random is used to return values between 0 and 1. We can multiply it with *10 to give values that is not in the decimals, but sometimes the math.random operator can return 0 so we add 1 to not make it return 0.
const min = 10
const max = 30
// console.log (Math.floor(Math.random()*(max-min+1))+min)
// //Math.random() gives out a value between 0.1-0.9,
// //in this line of code im multiplying the Math.random() operator with min - max+1 to give values above zero,
// //then i'm adding min to give it a range between 10 to 20. I'm using Math.floor() to round down the decimals.
// //example - If i run the code , i'll get a value between 0-9 without adding the min variable, after adding the min variable i'll get a value between 10-20
// console.log(Math.floor(Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)