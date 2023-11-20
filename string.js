let a="hello"
let name = "nick"
console.log(`${a},my name is ${name}`);
//This method is called string interpolation, this allows us to create placeholders to inject the variable directly insdie the sting.
const gamename=new String("Valorant")
//This is a different way to define a string. This allows us to define a string as an object,this helps us in performimg operations on a string.
 console.log(gamename.charAt(3));
console.log(gamename.indexOf("o"))
let newString=gamename.substring(0,3)
console.log(newString)

let anotherOne=gamename.slice(-7,3)
console.log(anotherOne)
let newOne=new String("   This is a string    ")
console.log(newOne)
console.log(newOne.trim())
//trim() helps us to remove empty spaces in a string, to help with readability and database storage.
const url = "https://www.google.com/search?q=url&oq=url&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg5MgYIAhAuGEDSAQc0NDdqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"
console.log(url.replace("/search?q"," hellothisishow "))
console.log(url.includes("google"))