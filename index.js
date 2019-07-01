var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)  
}

function appendKitten(name) {
  const newArray = kittens.concat(name)
  return newArray
}

function prependKitten(name) {
  kittens.splice(0, 0, name)
  return kittens
}







