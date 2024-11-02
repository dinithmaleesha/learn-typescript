// -------------
// union types
// -------------

let someId: number | string     // this can be either number or string in future

someId = 1
someId = '2'

let email: string | null = null
email = 'test@gmail.com'
email = null


type Id = number | string
let anotherId: Id

anotherId = 'sfasfaf'
anotherId = 56


// --------------------
// union type pitfall
// --------------------

function swapIdType(id: Id): Id {
    // can only use props and methods common to both number and string types
    // pareInt(id) --> not allowed

    

    return id
}

swapIdType(5)