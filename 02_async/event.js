'use strict'

const fs = require('fs')
const EventEmitter = require('events')

const events = new EventEmitter()

function onPing () {
  console.log('Recibi un ping')
}

function onSecondPing () {
  console.log('Recibi otro ping')
  events.emit('pong')
}

function onPong() {
  console.log('Solo un pong')
  events.removeListener('ping', onSecondPing)
  fs.readFile('noexist', err => events.emit('error', err))
}

events.on('ping', onPing)

events.on('ping', onSecondPing)

events.once('pong', onPong)

events.on('error', err => {
  console.error(err.message)
})

// events.removeAllListeners('pong')

events.emit('ping')
events.emit('ping')

process.on('uncaughtException', err => {
  console.log(err)
  process.exit(1)
})