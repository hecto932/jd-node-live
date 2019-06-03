'use strict'

// Timer
setImmediate(function () {
  console.log('Immediate')
})

// Check
setTimeout(function () {
  console.log('Timeout')
})

// After next phase
process.nextTick(function () {
  console.log('Tick')
})