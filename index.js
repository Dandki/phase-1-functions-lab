//Distance from HQ
function distanceFromHqInBlocks(someValue){
    const headQuarters = 42
        return Math.abs(someValue - headQuarters)
}


//Distance From HQ in Feet
function distanceFromHqInFeet(someValue){
    const distanceInFeet = distanceFromHqInBlocks(someValue) *264
        return(distanceInFeet)
}

//Distance travelled in feet
function distanceTravelledInFeet(startFrom, endDestination){
    let distanceInFeet = Math.abs(startFrom - endDestination) *264
        return(distanceInFeet)
}

//Calculates Fare Price
function calculatesFarePrice(start, destination){
    let farePrice = 0;
    let distanceInFeet = Math.abs(start - destination) *264

    if (distanceInFeet <= 400){
        farePrice = 0;
    }
        else if (distanceInFeet > 400 && distanceInFeet <= 2000){
            farePrice = (distanceInFeet - 400) * 0.02
        }
        else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            farePrice = 25.00
        }
        else if (distanceInFeet > 2500) {
            farePrice = 'cannot travel that far'
        }
    return(farePrice)

}
