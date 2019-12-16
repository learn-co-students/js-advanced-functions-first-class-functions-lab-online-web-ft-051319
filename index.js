function returnFirstTwoDrivers(array) {
  return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
  return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
  return function (fare) {
    return multiplyValue * fare;
  };
};

fareDoubler = (fare) => {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
}
