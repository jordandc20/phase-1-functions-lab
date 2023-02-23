// Code your solution in this file!
// write a function, distanceFromHqInBlocks, that takes in a pickup location for a passenger, and returns the number of blocks from Scuber headquarters on 42nd Street. For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8.

let custLoc;
let distLocHq;
function distanceFromHqInBlocks(custLoc) {
    // let distLocHq;

    const hqLoc = 42
    distLocHq = Math.abs(custLoc - hqLoc)

return distLocHq
}

//SOLUTION
/* 
function distanceFromHqInBlocks (blockNumber) {
  if (blockNumber > 42) {
    return blockNumber - 42;
  } else {
    return 42 - blockNumber;
  }
}

*/



//The distanceFromHqInBlocks function's return value can then be used for another function, distanceFromHqInFeet, that translates the number of blocks from headquarters to the distance in feet. Each block in Manhattan is 264 feet long.

function distanceFromHqInFeet(custLoc){


    distanceFromHqInBlocks(custLoc)
let distFeet;
    distFeet = distLocHq * 264
return distFeet

}

//SOLUTION
/*

function distanceFromHqInFeet (blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

*/

//Next, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in both the start and destination blocks, and returns the number of feet travelled. Remember, each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.

let startLoc;
let destLoc;
let distFt;
function distanceTravelledInFeet(startLoc, destLoc) {

  
distFt = Math.abs(destLoc - startLoc)  * 264

return distFt
}

// SOLUTION
/*
function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

*/

//calculatesFarePrice: Given the same starting and ending block as the previous test (hint hint), return the fare for the customer. The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.

function calculatesFarePrice(startLoc, destLoc) {
    distanceTravelledInFeet(startLoc, destLoc) 
    let fare;
       switch (true) {
            case distFt <= 400 : return 0
            case distFt > 400 && distFt <= 2000 : return (distFt - 400) * 0.02
            case distFt > 2000 && distFt < 2500 : return 25
            default : return 'cannot travel that far'

            // case distFt <= 400 : fare = 0
            // break;
            // case distFt > 400 && distFt <= 2000 : fare = (distFt - 400) * 0.02
            // break;
            // case distFt > 2000 && distFt < 2500 : fare = 25
            // break;
            // default : fare  ='cannot travel that far'

        }
    return fare
    }
    

    //SOLUTION

    /*

function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
    */