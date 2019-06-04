'use strict'

function sayHello () {
  console.log('Hello world!')
}

setImmediate(sayHello, 5000)