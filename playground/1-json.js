// const fs = require('fs')
/** 
const libro = {
    title:'the suttle are or not giving a f*ck',
    author:'someone'
}

const bookJSON = JSON.stringify(libro)
console.log(bookJSON)

fs.writeFileSync('1-json.json', bookJSON)
*/

/**
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.title)
 */
/* pasos para utilizar info de un json
1. trae la info
2. lo convierte en string 
3. lo convierte en json
4. ya puede sacar la info del json


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/ 

/**
 * challenge 6:(storing data with JSON): Work with JSON and the file system
 * 1. Load and parse the JSON Data
 * 2. Change the name and age property using your info
 * 3. Stringfy the changed object and overwrite the original data
 * 4. Test your work by viewing in the JSON File
 */

 const fs = require('fs')

const value = {
    name: 'juan',
    age: 120
}

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = value.name
user.age = value.age

console.log(user)


//enviar al .json
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)



