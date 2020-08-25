// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop()
}

function destructivelyRemoveFirstDriver() {
    drivers.shift()
}

function appendDriver(name) {

    let d = drivers.slice()
    d.push(name)
    return d 

}

function prependDriver(name) {

    let d = drivers.slice()
    d.unshift(name)
    return d 

}

function removeLastDriver() {

    let d = drivers.slice()
    d.pop()
    return d

}

function removeFirstDriver() {

    let d = drivers.slice()
    d.shift()
    return d

}