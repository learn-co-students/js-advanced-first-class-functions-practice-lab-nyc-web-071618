// Code your solution in this file!

const logDriverNames = function(drivers){
  drivers.forEach(function (el) {
    console.log(el.name);
  });
}

const logDriversByHometown = function(drivers, hometown){
  drivers.forEach(function (el){
    if (el.hometown === hometown)
      console.log(el.name);
  });
}

// const driversByRevenue = function(drivers){
//   // return new array and not affecting the old
//   return drivers.slice().sort(function(a,b){
//     return a.revenue - b.revenue;
//   });
// };

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo){
    return driverOne.name.localeCompare(driverTwo.name);
  });
};

const totalRevenue = function (drivers){
  return drivers.reduce(function(total, driver){
     return total + driver.revenue }, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length;
}
