'use strict'

const fs = require('fs')
const { promisify } = require('util')
const sleep = require('then-sleep')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

async function main () {
  try {
    const file = await readFile('file.json', 'utf8')
    const parse = JSON.parse(file)
    console.log('Tenemos el archivo', file)
    await sleep(500)
    console.log(parse)
    console.log('Vamos a escribir')
    await writeFile('copy.js', file)
    await sleep(500)
    console.log('Terminanos')
  } catch (err) {
    console.log(err)
  }
}

main()