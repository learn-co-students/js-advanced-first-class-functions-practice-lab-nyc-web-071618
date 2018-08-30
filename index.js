// Code your solution in this file!

  function logDriverNames(array) {
  for ( i in array ) {
    console.log(array[i].name);
    }
  }


  function logDriversByHometown(drivers, location) {
    for (i in drivers){
    if (drivers[i].hometown === location)
    console.log(drivers[i].name)
    };
  }

  function driversByRevenue(array) {
    return array.slice().sort(function(a,b){
       return a.revenue-b.revenue;
    });
  }

  function driversByName(array) {
    return array.slice().sort(function(a,b){
      return a.name.localeCompare(b.name);
    })
  };

  function totalRevenue(array){
    rev = 0
    for (i in array){
      rev += array[i].revenue
      }
    return rev;
  }


  function averageRevenue(array){
    rev = 0
    for (i in array){
      rev += array[i].revenue
      }
    return rev/ array.length
  }
