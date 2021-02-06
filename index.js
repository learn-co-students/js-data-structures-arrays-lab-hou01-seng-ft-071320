// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver() {
    drivers.push('Ralph')
}
destructivelyAppendDriver()

function destructivelyPrependDriver() {
    drivers.unshift("Bob")
}
destructivelyPrependDriver()

function destructivelyRemoveLastDriver() {
    drivers.pop()
}
destructivelyRemoveLastDriver()

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}
destructivelyRemoveFirstDriver()

function appendDriver() {
    return [...drivers, "Broom"]
}
appendDriver()
    
function prependDriver() {
    return ["Arnold", ...drivers]
}
prependDriver()

function removeLastDriver() {
    return drivers.slice(0, drivers.length-1)
}
removeLastDriver()

function removeFirstDriver() {
    return drivers.slice(1, drivers.length)  
}
removeFirstDriver()