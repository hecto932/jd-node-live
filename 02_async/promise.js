'use strict'

const fs = require('fs').promises // SYNC
const { promisify, callbackify } = require('util')

console.log('Start script') // SYNC

// const readFile = promisify(fs.readFile)


fs.readFile('noexistant', 'utf-8')
  .then(file => console.log(file))
  .catch(err => console.log(err))


process.on('oncaugthException', err => {
  console.log(err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

// fs.readFile(__filename, 'utf-8', (err, file) => {
//   if (err) {
//     throw err
//   }
//   console.log(file)
// })

console.log('End script')