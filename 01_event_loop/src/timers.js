'use strict'

const later = function () {
  console.log('Later')
}

console.log('Hello')

setTimeout(later, 100)
