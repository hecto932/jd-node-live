'use strict'

const fs = require('fs')

fs.open(__filename, 'r', function (err, fd) {
  if (err) {
    return console.error(err.message)
  }
  console.log(fd);
})
