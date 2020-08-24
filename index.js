// Write your solution here!
 let drivers = ["Milo", "Otis", "Garfield"];

 function destructivelyAppendDriver(name){
     drivers.push(name);
 }

 function destructivelyPrependDriver(name){
     drivers.unshift(name);
 }
 
 function destructivelyRemoveLastDriver(){
     drivers.pop();
 }

function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
     let newDrivers = [...drivers, name];
     return newDrivers;
}

function prependDriver(name){
    let newDrivers = [name, ...drivers];
    return newDrivers;
}

function removeLastDriver(){
    let newDrivers = drivers.slice();
    newDrivers.pop()
    return newDrivers
}

function removeFirstDriver(){
    let newDrivers = drivers.slice();
    newDrivers.shift()
    return newDrivers
}
