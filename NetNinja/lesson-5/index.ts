// Arrays
// ------------
let names: string[] = ['Dinith', 'Mario', 'Luigi']        // only strings
let ages: number[] = [12, 34, 23]

names.push('hello')
ages.push(19)



// --------------------------
// Type inference with arrays
// --------------------------
let fruits = ['apples', 'pears', 'bananas']
const f = fruits[2]

let things = [1, true, 'Hello']
const t = things[2]


// --------------------------
// Object literals
// --------------------------
let user: {firstName: string, age: number, id: number} = {
    firstName: 'Dinith',
    age: 22,
    id: 1
}
user.firstName = 'Maleesha'


// --------------------------
// Type inference with object literals
// --------------------------

let person = {
    name: 'luigi',
    score: 23
}

person.name = 'Maleesha'
person.score = 12