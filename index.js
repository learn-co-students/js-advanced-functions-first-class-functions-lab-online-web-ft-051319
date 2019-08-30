const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(Math.max(driversArray.length - 2, 0))
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return multiplier * fare
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

const selectDifferentDrivers = function(driversArray, fn){
    return fn(driversArray)
}