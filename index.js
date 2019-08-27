// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  const fn = function(drivers){
    return drivers.slice(0,2)
  }
  return fn(drivers)
}

function returnLastTwoDrivers(drivers){
  const fn = function(drivers){
    return drivers.slice(drivers.length-2)
  }
  return fn(drivers)
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
  return function(fare){
    return multiplier*fare
  }
}

function fareDoubler(fare){
  return createFareMultiplier(2)(fare)
}

function fareTripler(fare){
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers,fn){
  return fn(drivers)
}
