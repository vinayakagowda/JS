const mySym=Symbol("key1");
const user={
    name:"Nick",
    age:23,
    years_of_exp:5,
    Favorite_days:["Monday","Tuesday","Wednesday"],
    [mySym]:"Key1"
    //this is the proper way to use a symbol inside of an object.

}
// console.log(user.name)
// console.log(user["name"])
//It is always recomended to access the contents on an object using the [] brackets,When the contents of the oject is defined the keys are alwasys stored as string.


console.log(user[mySym])
user.email="nick@google.com"
// console.log(user.email)
// Object.freeze(user)
//Object.freeze(objectname) is used to prevent an object from being changed, If the object is changed this won't give out an error but will just won't register the changes
user.greeting=function(){
    // console.log("hello darkness my old friend")

}
console.log(user.greeting())
user.greeting2=function()
{
    console.log(`Hello ${this.name},Your email is ${this.email}and your favorite days are ${this.Favorite_days}`)
    //this keyword is to refrence the properties that are inside of the current object
}
console.log(user.greeting2)
console.log(user.greeting2())