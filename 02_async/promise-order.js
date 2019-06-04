'use strict'

console.log('script start')

setImmediate(function () {
  console.log('setImmediate')
}, 0)

Promise.resolve().then(function () {
  console.log('promise 1')
}).then(function () {
  console.log('promise 2')
})

console.log('script end')

// setImmediate - check
// setTimeout - timers
// process.nextTick() - timers