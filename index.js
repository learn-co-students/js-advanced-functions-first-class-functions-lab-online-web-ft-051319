// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = function() {

// }
function createFareMultiplier(int) {
    return function(fare) {return int * fare}
}

const fareDoubler = function(fare, rate = 2) {
    return createFareMultiplier(fare)(rate)
}

const fareTripler = function(fare, rate = 3) {
    return createFareMultiplier(fare)(rate)
}

function selectDifferentDrivers(arr, fn) {
    return fn(arr)
}