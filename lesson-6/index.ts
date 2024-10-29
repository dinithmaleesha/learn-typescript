// --------------
// functions
// --------------

function addTwoNumbers(a: number, b: number): number {
    return a + b
}

const subtractTwoNumbers = (a: number, b: number): number => {
    return a - b
}

addTwoNumbers(10, 5)
subtractTwoNumbers(10, 5)


function addAllNumbers(items: number[]): void {
    const total = items.reduce((a, c) => a + c, 0)
    // console.log(total)
}
addAllNumbers([10, 5, 2, 3])


// --------------
// return type inferece
// --------------

function formatGreeting(name: string, greeting: string) {
    return `${greeting}, ${name}`
}

const result = formatGreeting('Mario', 'Hello')
console.log(result);
