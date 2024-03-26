//This module demonstrates the difference between heap and Stack memory.
//Stack memory(primitive) and heap(non primitive)
let name1="nick"
console.log(name1)
let name2=name1
name2="Vin"
console.log(name2)
console.log(name1)
//When the name2 variable is assigned it has the value of name1 variable,when the value of name2 is reassigned,a value but name1's value isnt changed.
//This is beacuse in stack memory, duplicates are created and their value is changed,the original remains intact.
let naam={
    naa:"nick",
    email:"lightnn@hndhi.com"
}
let naam2=naam
naam2.email="hsdhdjg@hgkjkjh.com"
console.log(naam.email,  naam2.email)
//in heap changes made to an instance is changed permanently in memory.