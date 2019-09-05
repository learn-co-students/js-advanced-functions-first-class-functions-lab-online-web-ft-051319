const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(rate) {
    return function multiplyFare(fare) {
        return rate * fare;
    }
}

const fareDoubler = (fare, rate = 2) => {
    return createFareMultiplier(rate)(fare);
}

const fareTripler = (fare, rate = 3) => {
    return createFareMultiplier(rate)(fare);
}

function selectDifferentDrivers(drivers, fxn) {
    return fxn(drivers);
}