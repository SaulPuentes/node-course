// Challenge: Define and use a function in a new file
//
// 1. Create a new file called a notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes')

const msg = getNotes()

console.log(msg)

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)