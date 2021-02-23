const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
// }

// const bookJSON = JSON.stringify(book)
// const parsedData = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file
//

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = 'Saul'
data.age = 24

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)