// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}  

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length - 2);
}  

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
};

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayofDrivers, selectFunc) {
    return selectFunc(arrayofDrivers);
}