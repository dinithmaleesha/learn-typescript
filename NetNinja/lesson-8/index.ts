// ----------
// tuples
// ----------
let person: [string, number, boolean] = ['Dinith', 30, true]

// ----------
// tuples examples
// ----------
let hsla: [number, string, string, number]
hsla = [200, '100%', '50%', 1]

let xy: [number, number]
xy = [60, 50]

function useCoords(): [number, number] {
    const lat = 100
    const long = 50

    return [lat, long]
}

const [lat, long] = useCoords()

// ----------
// names tuples
// ----------
let user: [name: string, age: number]

user = ['Dinith', 25]
console.log(user[0]);
