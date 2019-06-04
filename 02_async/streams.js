'use strict'

const fs = require('fs')
const { Transform } = require('stream')

const pass = new Transform()
pass._transform = function (chunk, encoding, callback) {
  const data = chunk.toString('utf-8')
  const modified = data.replace(/setTimeout/g, 'setImmediate')
  callback(null, Buffer.from(modified))
}
const writable = fs.createWriteStream('callbacks_modified.js')
const readable = fs.createReadStream('callbacks.js')

readable
  .pipe(pass)
  .pipe(writable)
