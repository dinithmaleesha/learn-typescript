// build on js

let myname = 'Dinith' // cant change the variable type



// Benefits of TS
//----------------

// 1 - Better error feedback
function reverse(str: string) {
    return str.split('').reverse().join('')
}
const result = reverse('Hello')

// 2 - Better autocompletion & code hints
const reversed = reverse('Dinith')

// 3 - Custom types
interface MenuItem {
    title: string,
    cost: number
}

function printMenuItem(item: MenuItem) {
    console.log(item.title, ':', item.cost);
}

// error example 1
// printMenuItem(); // Expected 1 arguments, but got 0.

// error example 2
// printMenuItem({title: 'Pizza', cost: '10'}) // Type 'string' is not assignable to type 'number'

// error example 3
// printMenuItem({name: 'Pizza', cost: 10}) // Object literal may only specify known properties, and 'name' does not exist in type 'MenuItem'.



// 4 - self documenting
// printMenuItem()




// just like JS, with extra type annotations