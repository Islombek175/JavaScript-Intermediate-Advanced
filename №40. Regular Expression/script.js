'use strict'

// ----- /pattern/f

const firstName = 'Matyaub'

let regEx = /a/gi
// i (flag) => register, doesn't matter letter is upper or lower case
// g (flag) => global, returns all items
// m (flag) => many rows

console.log(firstName.search(regEx))
// search => returns only first faced item

console.log(firstName.match(regEx))
// match => returns all items into massive

console.log('------------------')

const password = 'passw....'

console.log(password.replace(/./g, '*'))
// /./ => all symbols
//  replaces all from /pattern/f ---> "given symbol"

console.log('------------------')

console.log(password.replace(/\./g, '*'))
// replaces all '.' ---> 'given symbol'

const date = '2026:02:03'

console.log(date.replace(/:/g, '-'))

console.log('------------------')

const lastName = 'MatkarimOv'

regEx = /o/i

console.log(regEx.test(lastName))
// test => returns true or false

const email = 'mAtkaimovislAmbek@gmail.com'
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

console.log(emailRegEx.test(email))

console.log('------------------')

// \d => digits
// \w => words
// \s => space

const text = 'salom 123'

console.log(text.match(/\d/g))
console.log(text.match(/\w/gi))
console.log(text.match(/\s/gi))

// \D => not digits
// \W => not words

console.log('------------------')

console.log(text.match(/\D/g))
console.log(text.match(/\W/g))
