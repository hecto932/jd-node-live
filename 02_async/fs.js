"use strict";

const fs = require("fs");
const once = require("once");
const after = require('after')
const { series } = require('async')

const files = [
  next => doFileOperations('callbacks.js', next),
  next => doFileOperations('fs.js', next),
  next => doFileOperations('package.json', next)
]

const done = (err, results) => {
  if (err) {
    console.log(`Hemos procesados ${results.length} archivos`)
    return
  }

  console.log(`Hemos procesado archivos`)
}

series(files, done)

function doFileOperations(filename, callback) {
  callback = once.strict(callback)
  fs.readFile(filename, "utf-8", onReadFile);

  const onWriteFile = err => {
    if (err) {
      return console.log(err.message);
    }

    console.log('Listo!')
    callback(null, true)
  };

  function onReadFile(err, data) {
    if (err) {
      return console.error(err.message);
    }

    const modified = data.replace(/setTimeout/g, "setInterval");
    fs.writeFile("callback_interval.js", modified, onWriteFile);
  }
}