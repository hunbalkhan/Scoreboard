let countEl1 = document.getElementById("count-el1")
let countEl2 = document.getElementById("count-el2")

let scoreHome = 0
let scoreGuest = 0

function one() {
    scoreHome += 1
    countEl1.innerText = scoreHome
}
function two() {
    scoreHome += 2
    countEl1.innerText = scoreHome
}
function three() {
    scoreHome += 3
    countEl1.innerText = scoreHome
}


function one2() {
    scoreGuest += 1
    countEl2.innerText = scoreGuest
}
function two2() {
    scoreGuest += 2
    countEl2.innerText = scoreGuest
}
function three2() {
    scoreGuest += 3
    countEl2.innerText = scoreGuest
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    countEl1.innerText = 0 
    countEl2.innerText = 0
}