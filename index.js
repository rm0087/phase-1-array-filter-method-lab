
function findMatching(arrayDrivers, driverName){
    return arrayDrivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase());
}

function fuzzyMatch(arrayDrivers, driverName){
    return arrayDrivers.filter(driver => driver.toLowerCase().startsWith(driverName.toLowerCase()));
}

function matchName(arrayDrivers, driverName){
    return arrayDrivers.filter(driver => driver.name.toLowerCase().startsWith(driverName.toLowerCase()));
}












