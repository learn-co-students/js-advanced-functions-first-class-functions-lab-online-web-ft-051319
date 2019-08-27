const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply) {
  return function (cost) {
    return multiply * cost
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArray, fn) {
  return fn(driverArray)
}
