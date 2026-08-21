let home = 0
let guest = 0
function inc1H() {
    home += 1
    document.getElementById("count1").textContent = home
}
function inc2H() {
    home += 2
    document.getElementById("count1").textContent = home
}
function inc3H() {
    home += 3
    document.getElementById("count1").textContent = home
}
function inc1G() {
    guest += 1
    document.getElementById("count2").textContent = guest
}
function inc2G() {
    guest += 2
    document.getElementById("count2").textContent = guest
}
function inc3G() {
    guest += 3
    document.getElementById("count2").textContent = guest
}
function newCount() {
    home = 0
    guest = 0
    document.getElementById("count1").textContent = home
    document.getElementById("count2").textContent = guest
}