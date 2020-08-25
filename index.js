// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


const destructivelyAppendDriver = function(name) {
    drivers.push(name)
}

const destructivelyPrependDriver = function(name) {
    drivers.unshift(name)
}

const destructivelyRemoveLastDriver = function() {
    drivers.pop()
}

const destructivelyRemoveFirstDriver = function() {
    drivers.shift()
}

const appendDriver = function(name) {
    const newArray = [...drivers, name]
    return newArray
}

const prependDriver = function(name) {
    const newArray = [name, ...drivers]
    return newArray
}

const removeLastDriver = function() {
    const newArray = drivers.slice(0, drivers.length - 1)
    return newArray
}

const removeFirstDriver = function() {
    const newArray = drivers.slice(1)
    return newArray
}

