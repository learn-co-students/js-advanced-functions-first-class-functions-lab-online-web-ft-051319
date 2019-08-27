// Code your solution in this file!\
const returnFirstTwoDrivers = function(driversArr){
    return [driversArr[0], driversArr[1]]
}

const returnLastTwoDrivers = function(driversArr){
    return [driversArr[driversArr.length - 2], driversArr[driversArr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(fare){
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, chooseDriver) {
    return chooseDriver(drivers);
  };


