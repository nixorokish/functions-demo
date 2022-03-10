let jonHealth = 100

let jonString = String(jonHealth)

// console.log(typeof(jonString))
// console.log(Boolean(jonHealth))

let theWinner = `Jamie is the winner.`

let newWinner = theWinner.replace(`Jamie`, `Jon`)
// console.log(theWinner, `\n`, newWinner)

// if (newWinner.includes(`Jon`)) {
//     console.log(`replaced successfully`)
// }

let lower = newWinner.toLowerCase()
// console.log(lower)
let split = lower.split(` `)
// console.log(split)
let kebab = split.join(`-`)
// console.log(`this is kebab case: ${kebab}`)

let kebab2 = lower.replaceAll(` `, `-`)
// console.log(`this is kebab case: ${kebab2}`)

// can chain together methods like so:
let kebab3 = newWinner.toLowerCase().split(` `).join(`-`)
// console.log(kebab3)

function isJonAlive() {
    if(jonHealth > 0) {
        console.log(`Jon is alive!`)
    } else {
        console.log(`RIP in pieces Jon Snow`)
    }
}

// haven't invoked the function yet, still need to invoke it.

// isJonAlive()

const surpriseAttack = function(attack) {
    jonHealth -= attack
    isJonAlive()
}

// surpriseAttack(20)
// console.log(jonHealth)
// isJonAlive()
// surpriseAttack(85)
// console.log(jonHealth)
// isJonAlive()

const greeting = (person1, person2) => {
    console.log(`${person1} says hello to ${person2}`)
}

// greeting(`Ned Stark`, `Jon Snow`)
// greeting(`Andrew`, `Nick`)

function rollDie() {
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    // Math.random gives a random number between 0 and 0.99
    // Math.floor takes the lowest whole number - rounds DOWN, irrespective of decimal value
    // console.log(randomNumber)
    return possibleRolls[randomNumber]
}

let roll = rollDie()

const rollTwo = function() {
    let first = rollDie()
    let second = rollDie()
    return first + second
}

const two = rollTwo()
console.log(two)

const two2 = () => rollDie() + rollDie()

const secondTwo = two2()
console.log(secondTwo)
