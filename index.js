// Code your solution in this file!
function returnFirstTwoDrivers(array) {
  return [array[0], array[1]]
}

function returnLastTwoDrivers(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyValue) {
  return function (fare) {
    return multiplyValue * fare;
  };
};

// const createFareMultiplier = function (multiplyValue) {
//   return function (value) {
//     return multiplyValue * value;
//   };
// };
//what's the diff?
function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}


function selectDifferentDrivers(arrayOfDrivers, functionName) {
  return functionName(arrayOfDrivers)
}
