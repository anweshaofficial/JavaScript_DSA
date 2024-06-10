//Flight itinerary Finder 

function findItinerary(flights, start){
    let result = [];

    function search(currentItinerary){

        if(currentItinerary.length === flights.length + 1){
            result.push(currentItinerary);  //or result = currentItinerary
            return true;
        }

        if (!result.length){
            let lastStop = currentItinerary[currentItinerary.length - 1];
            flights.forEach((flight, index) => {
                let remainingFlights = flights.slice(0, index).concat(flights.slice(index + 1));
                if(flight[0] === lastStop){
                    if(search(currentItinerary.concat(flight))){
                        return true;
                    }
                }
            });
        }
        return false; 

    }
    search([start]);
    return result;
    

}

//Test Cases
console.log(findItinerary([["LA", "NY"], ["NY", "LA"]], "LA")); // Expected: [["LA", "NY", "LA"]]
console.log(findItinerary([["Boston", "Chicago"], ["Chicago", "Boston"], ["Boston", "NY"], ["NY", "Boston"]], "Boston")); // Expected: [["Boston", "Chicago", "Boston", "NY", "Boston"]]
console.log(findItinerary([["San Francisco", "Boston"], ["Boston", "San Francisco"], ["San Francisco", "Seattle"], ["Seattle", "San Francisco"]], "San Francisco")); // Expected: [["San Francisco", "Boston", "San Francisco", "Seattle", "San Francisco"]]
console.log(findItinerary([["Houston", "Dallas"], ["Dallas", "Austin"], ["Austin", "Houston"]], "Houston")); // Expected: [["Houston", "Dallas", "Austin", "Houston"]]
console.log(findItinerary([["Atlanta", "Orlando"], ["Orlando", "Miami"], ["Miami", "Atlanta"], ["Atlanta", "New York"]], "Atlanta")); // Expected: [["Atlanta", "Orlando", "Miami", "Atlanta", "New York"]]

console.log(findItinerary([["Mumbai", "Paris"], ["Mumbai", "Dubai"], ["Paris", "Dubai"]], "Mumbai"));
