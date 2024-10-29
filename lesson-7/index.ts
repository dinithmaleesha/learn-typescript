// -----------------
// any type
// -----------------

let age: any        // can have any types
age = 30
age = false

let title           // default type is any
title = 'name'
title = 35

// -----------------
// any type in arrays
// -----------------
let things: any[] = ['Hello', true, 20, null]
things.push({id: 123})


// -----------------
// functions & any
// -----------------
function addTogether(value: any): any {
    return value + value
}

const resultOne = addTogether('Hello')
const resultTwo = addTogether(5)
console.log(resultTwo);