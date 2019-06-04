'use strict'

const fs = require('fs') // SYNC
const { promisify } = require('util')

console.log('Start script') // SYNC

const readFile = fs.readFile

readFileWrapped('noexistant')
  .then(file => console.log(file))
  .catch(err => console.log(err, 4))

// PARALELIZAR
const p1 = readFileWrapped('package.json', 'utf8')
const p2 = readFileWrapped(__filename)
const p3 = readFileWrapped('fs.js')

Promise.race([
  p1,
  p2,
  p3
]).then(values => {
  console.log(values)
})


process.on('oncaugthException', err => {
  console.log(err)
  process.exit(1)
})

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

function readFileWrapped (file, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding || null, (err, file) => {
      if (err) {
        reject(err)
      }
      resolve(file)
    })
  })
}

function chainable () {
  return new Promise((resolve, reject) => {
    resolve('im last');
  })
}

chainable()
  .then(value => {
    console.log(value)
    return Promise.resolve('im last')
  })
  .then(value => console.log(value))

console.log('End script')