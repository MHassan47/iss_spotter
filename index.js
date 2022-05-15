const { nextISSTimeForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("24.77.201.158", (error, location) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(location);
// });
// fetchISSFlyOverTimes(
//   { latitude: 49.89345932006836, longitude: -97.00115966796875 },
//   (error, data) => {
//     if (error) {
//       console.log("123 error: " + error);
//       return;
//     }
//     console.log(data);
//   }
// );

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimeForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

module.exports = { printPassTimes };
