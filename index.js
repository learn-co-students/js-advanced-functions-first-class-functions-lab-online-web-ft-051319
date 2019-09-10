// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  let lastarray=drivers.slice(drivers.length-2, drivers.length)
  return lastarray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return (function (fare) {
    return fare * multiplier
  })
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, driverFunction) {
  if (driverFunction === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
  }
  else {
    return returnLastTwoDrivers(drivers)
  }
}
