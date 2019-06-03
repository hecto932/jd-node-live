'use strict'

let bar

function doSomething (callback) {
  process.nextTick(callback)
}

doSomething(function (result) {
  console.log('bar', bar)
})

bar = 1