const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

function fareDoubler(fare) {
    const newFare = createFareMultiplier(2)(fare);
    return newFare;
}

function fareTripler(fare) {
    const newFare = createFareMultiplier(3)(fare);
    return newFare;
}

function selectDifferentDrivers(drivers, driverFunc) {
    return driverFunc(drivers);
}