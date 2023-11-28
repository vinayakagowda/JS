const tinderUSer={}
tinderUSer.name="Hulk"
tinderUSer.bio="hello world"
// console.log(typeof (tinderUSer))
// console.log(tinderUSer["name"])
// console.log(`This is fun! ${tinderUSer.bio}!!`)
// Object.freeze(tinderUSer)
// //So son this is called inhertance
// const tinderUSer2=tinderUSer
// console.log(tinderUSer.bio)
// tinderUSer2.hobby="Smoking weed"
// console.log(tinderUSer2.hobby)
//Cannot assign values because of Object.freeze(). The output we get is undefined because the new values assigned by inheritance isn't considered. 
const bumble={
    email:"vinayaka@bumble.com",
    fullname:{
        user_fullname:{
            first_name:"Phat",
            last_name:"akka"
        }

    }
}//This is called object nesting,New objects can be defined inside of objects.
// console.log(bumble.fullname)
// console.log(bumble.fullname.user_fullname)
const ob1={1:"A",2:"B"}
const ob2={2:"C",3:"D"}
// const obj3={ob1,ob2}
// console.log(obj3)
//This is a method of combining two objects inside a container object.
// const obj3=Object.assign({},ob1,ob2)
// console.log(obj3)
//This is how you combine two objects using .assign(). The empty {} makes sure that the .assign returns the expected values all the time.
//Without the empty object the combined objects are stored inside the ob1.
const obj3={...ob1,...ob2}
// console.log(obj3)
//The ... operator is called spread operator, this is used to seperate two or more objects inside of a new object.
const Arrayobj=[
    {
        name:"Nick"
    },
    {
        2:"Gowda"
    }
]
//This is called array of objects, The objects are stored inside an array.
Arrayobj[0].name 
//To access the elements of the array objecs it  is same as accesing array elements
// console.log(tinderUSer)
// console.log(Object.keys(tinderUSer))
// console.log(Object.values(tinderUSer))
//When accesing the keys or values of an object, They are always returned in the form of arrays.
// console.log(Object.entries(tinderUSer))
//Object.entries() seperates all the key value pair into small arrays.
// console.log(tinderUSer.hasOwnProperty('bio'))
// //.hasOwnProperty() is used to know if the given object has a specific properties.
// console.log(bumble.hasOwnProperty('fullname'))
// //************************************************************************Objects JSON Destructuring *********************************************888888888888*/
const course={
    coursename:"JS" ,
    courseinstructor:"nick"
}
const{coursename}=course
//This is called destructuring an object,From now on when we are trying to perform operations on a object, we don't have to write the whole syntax example course.coureinstructor.We can just write courseinstructor

console.log(coursename)
const{courseinstructor:instructor}=course
console.log(instructor)
 